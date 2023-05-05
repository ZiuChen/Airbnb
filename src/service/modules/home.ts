import request from '@/service'
import { GoodPriceInfo, HighScoreInfo } from './types'

export function fetchGoodPriceInfo() {
  return request.get<GoodPriceInfo>({ url: '/home/goodprice' })
}

export function fetchHighScoreInfo() {
  return request.get<HighScoreInfo>({ url: '/home/highscore' })
}
