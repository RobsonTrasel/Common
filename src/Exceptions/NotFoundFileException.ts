/**
 * @athenna/common
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Exception } from '#src/Helpers/Exception'

export class NotFoundFileException extends Exception {
  public constructor(filePath: string) {
    super({
      code: 'E_NOT_FOUND_FILE',
      message: `The file ${filePath} doesnt exist.`,
      help: 'Try using File.create method to create the file.',
    })
  }
}
