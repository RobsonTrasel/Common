/**
 * @athenna/common
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { RequestError, RetryObject } from 'got'

export type RetryStrategyCallback = (
  error: RequestError,
  execCount: number,
  retryObject: RetryObject,
) => number | Promise<number>
