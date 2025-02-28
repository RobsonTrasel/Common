/**
 * @athenna/common
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Exception } from '#src/Helpers/Exception'

export class RouteMatchException extends Exception {
  public constructor(routeWithParams: string, routeWithValues: string) {
    super({
      code: 'E_ROUTE_MATCH',
      message: `The route ${routeWithParams} does not match ${routeWithValues}`,
      help: 'Please open an issue in https://github.com/AthennaIO/Common/issues',
    })
  }
}
