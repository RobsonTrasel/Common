/**
 * @athenna/common
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { test } from '@japa/runner'
import { FakeApi, Folder, HttpClient, Path } from '#src'

test.group('FakeApiTest', group => {
  group.setup(async () => {
    await new Folder(Path.stubs('resources')).copy(Path.resources())
  })

  group.teardown(async () => {
    await Folder.safeRemove(Path.resources())
  })

  group.each.teardown(async () => {
    await FakeApi.stop()
  })

  test('should be able to register runtime routes', async ({ assert }) => {
    FakeApi.build()
      .path('/example')
      .method('GET')
      .body({ hello: 'world', example: 'example' })
      .statusCode(201)
      .register()

    assert.isFalse(FakeApi.isRunning())
    await FakeApi.start(8989, null)

    const response = await HttpClient.get('http://localhost:8989/example', { responseType: 'json' })

    assert.isTrue(FakeApi.isRunning())
    assert.equal(response.statusCode, 201)
    assert.deepEqual(response.body, { hello: 'world', example: 'example' })
  })

  test('should be able to register routes to redirect to other', async ({ assert }) => {
    FakeApi.build()
      .path('/example')
      .method('GET')
      .body({ hello: 'world', example: 'example' })
      .statusCode(201)
      .register()

    FakeApi.build().path('/example-redirect').redirectTo('http://localhost:8989/example').register()

    assert.isFalse(FakeApi.isRunning())
    await FakeApi.start(8989, null)

    const response = await HttpClient.get('http://localhost:8989/example-redirect', { responseType: 'json' })

    assert.isTrue(FakeApi.isRunning())
    assert.equal(response.statusCode, 201)
    assert.deepEqual(response.body, { hello: 'world', example: 'example' })
  })

  test('should be able to register file routes with runtime routes', async ({ assert }) => {
    FakeApi.build()
      .path('/example')
      .method('GET')
      .body({ hello: 'world', example: 'example' })
      .statusCode(201)
      .register()

    await FakeApi.start(8989)

    const options = { responseType: 'json' }

    const responseOne = await HttpClient.get('http://localhost:8989/users', options)

    assert.equal(responseOne.statusCode, 200)
    assert.deepEqual(responseOne.body, [
      { id: 1, name: 'Robson Trasel' },
      { id: 2, name: 'Victor Tesoura' },
    ])

    const responseTwo = await HttpClient.get('http://localhost:8989/example', options)

    assert.equal(responseTwo.statusCode, 201)
    assert.deepEqual(responseTwo.body, { hello: 'world', example: 'example' })

    const responseThree = await HttpClient.get('http://localhost:8989/example-redirect', options)

    assert.equal(responseThree.statusCode, 201)
    assert.deepEqual(responseThree.body, { hello: 'world', example: 'example' })
  })

  test('should be able to list all the routes registered in the fake server', async ({ assert }) => {
    await FakeApi.start()

    const routes = FakeApi.listRoutes()

    assert.isTrue(routes.includes('users (GET)'))
    assert.isTrue(routes.includes('users (POST)'))
    assert.isTrue(routes.includes(':id (DELETE)'))
    assert.isTrue(routes.includes('service-unavailable'))
  })
})
