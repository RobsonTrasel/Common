/**
 * @athenna/common
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Exception } from '#src/Helpers/Exception'

export class NotFoundResolveException extends Exception {
  public constructor() {
    super({
      code: 'E_NOT_FOUND_RESOLVE',
      message: `The importa.meta.resolve function does not exist in import.meta object.`,
      help: 'The resolve function is not defined because the --experimental-import-meta-resolve option in Node CLI is required when running your application. Try to set up this option when running your application.',
    })
  }
}
