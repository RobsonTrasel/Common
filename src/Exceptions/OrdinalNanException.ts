/**
 * @athenna/common
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Exception } from '#src/Helpers/Exception'

export class OrdinalNanException extends Exception {
  public constructor() {
    super({
      code: 'E_ORDINAL_NAN',
      message: 'Cannot ordinal NaN or infinite numbers.',
      help: 'Use a valid number instead of NaN or infinite.',
    })
  }
}
