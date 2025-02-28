/**
 * @athenna/common
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Collection } from '#src/Helpers/Collection'

export {}

declare global {
  interface Array<T> {
    /**
     * Call the toResource method of each item
     * inside the array.
     */
    toResource(criterias?: any): T[]

    /**
     * Transform the array to an Athenna collection.
     */
    toCollection(): Collection<T>
  }
}

// eslint-disable-next-line no-extend-native
Array.prototype.toResource = function (criterias = {}) {
  return this.map(model => model.toResource(criterias))
}

// eslint-disable-next-line no-extend-native
Array.prototype.toCollection = function () {
  return new Collection(this)
}
