/**
 * @athenna/common
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Path as PathImpl } from '#src/Helpers/Path'

export {}

declare global {
  export class Path extends PathImpl {}
}

const __global: any = global

if (!__global.Path) {
  __global.Path = PathImpl
}
