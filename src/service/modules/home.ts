import request from '@/service'
import { GoodPriceInfo } from './types'

export function fetchGoodPriceInfo() {
  return request.get<GoodPriceInfo>({ url: '/home/goodprice' })
}
