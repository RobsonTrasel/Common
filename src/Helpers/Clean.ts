/**
 * @athenna/common
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Is } from '#src/Helpers/Is'

export class Clean {
  /**
   * Remove all falsy values from array.
   */
  public static cleanArray(
    array: any[],
    removeEmpty = false,
    cleanInsideObjects = false,
  ): any[] {
    return array.filter((item, i) => {
      let returnItem = !!item

      if (removeEmpty && Is.Empty(item)) {
        returnItem = false
      }

      if (
        typeof item === 'object' &&
        !Is.Array(item) &&
        cleanInsideObjects &&
        returnItem
      ) {
        this.cleanObject(item, removeEmpty)
      }

      if (!returnItem) {
        array.splice(i, 1)
      }

      return returnItem
    })
  }

  /**
   * Remove all falsy values from object.
   */
  public static cleanObject(
    object: any,
    removeEmpty = false,
    cleanInsideArrays = false,
  ): any {
    Object.keys(object).forEach(prop => {
      if (removeEmpty && Is.Empty(object[prop])) {
        delete object[prop]

        return
      }

      if (Is.Array(object[prop]) && cleanInsideArrays) {
        this.cleanArray(object[prop], removeEmpty, true)
      }

      if (!object[prop]) {
        delete object[prop]
      }
    })
  }
}
