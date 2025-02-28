/**
 * @athenna/common
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { FormDataLike } from 'form-data-encoder'

export type Body =
  | any
  | string
  | Record<string, any>
  | ReadableStream
  | Generator
  | AsyncGenerator
  | FormDataLike
