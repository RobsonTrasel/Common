/**
 * @athenna/common
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Exception } from '#src/Helpers/Exception'

export class NotFoundFolderException extends Exception {
  public constructor(filePath: string) {
    super({
      code: 'E_NOT_FOUND_FILE',
      message: `The folder ${filePath} doesnt exist.`,
      help: 'Try using Folder.create method to create the folder.',
    })
  }
}
