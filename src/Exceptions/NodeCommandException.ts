/**
 * @athenna/common
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Exception } from '#src/Helpers/Exception'

export class NodeCommandException extends Exception {
  public constructor(command: string, error: any) {
    let help = ''

    if (error.stdout) {
      help = help.concat(`Command stdout:\n\n${error.stdout}`)
    }

    if (error.stderr) {
      help = help.concat(`Command stderr:\n\n${error.stderr}`)
    }

    if (!error.stdout && !error.stdout) {
      help = `Command error:\n\n${JSON.stringify(error)}`
    }

    super({
      help,
      code: 'E_NODE_EXEC',
      message: `Error has occurred when executing the command "${command}"`,
    })
  }
}
