import request from '@/service'
import { GoodPriceInfo, HighScoreInfo, DiscountInfo, RecommendInfo } from './types'

export function fetchGoodPriceInfo() {
  return request.get<GoodPriceInfo>({ url: '/home/goodprice' })
}

export function fetchHighScoreInfo() {
  return request.get<HighScoreInfo>({ url: '/home/highscore' })
}

export function fetchDiscountInfo() {
  return request.get<DiscountInfo>({ url: '/home/discount' })
}

export function fetchRecommendInfo() {
  return request.get<RecommendInfo>({ url: '/home/hotrecommenddest' })
}
