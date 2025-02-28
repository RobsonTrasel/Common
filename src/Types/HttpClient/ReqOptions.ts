/**
 * @athenna/common
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Except } from '#src/Types/Except'
import { OptionsInit, ResponseType } from 'got'

export type ReqOptions = Except<OptionsInit, 'responseType'> &
  Partial<{
    get responseType(): ResponseType | string
    set responseType(value: ResponseType | string)
  }>
