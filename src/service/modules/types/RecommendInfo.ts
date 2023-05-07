export interface RecommendInfo {
  _id: string
  type: string
  title: string
  dest_address: Destaddress[]
  dest_list: Destlist
}

interface Destlist {
  南海千灯湖公园: _[]
  季华园: _2[]
  佛山创意产业园: _3[]
  岭南天地: _4[]
  史努比缤纷世界: _2[]
  顺峰山公园: _2[]
  陈村花卉世界: _[]
  亚洲艺术公园: _3[]
}

interface _4 {
  id: string
  picture_url: string
  verify_info: Verifyinfo2
  name: string
  price: number
  price_format: string
  star_rating: number
  star_rating_color: string
  reviews_count: number
  reviews: Review[]
  bottom_info?: Bottominfo
  lat: number
  lng: number
  image_url: string
}

interface Verifyinfo2 {
  messages: string[]
  text_color: string
  kicker_badge?: Kickerbadge
}

interface Kickerbadge {
  label: string
  type: string
}

interface _3 {
  id: string
  picture_url: string
  verify_info: Verifyinfo
  name: string
  price: number
  price_format: string
  star_rating: number
  star_rating_color: string
  reviews_count: number
  reviews: Review2[]
  bottom_info?: Bottominfo
  lat: number
  lng: number
  image_url: string
}

interface Review2 {
  comments: string
  created_at: string
  is_translated: boolean
  localized_date: string
  reviewer_image_url: string
  review_id: number | string
}

interface _2 {
  id: string
  picture_url: string
  verify_info: Verifyinfo
  name: string
  price: number
  price_format: string
  star_rating: number
  star_rating_color: string
  reviews_count: number
  reviews: Review[]
  bottom_info: Bottominfo
  lat: number
  lng: number
  image_url: string
}

interface _ {
  id: string
  picture_url: string
  verify_info: Verifyinfo
  name: string
  price: number
  price_format: string
  star_rating: number
  star_rating_color: string
  reviews_count: number
  reviews: Review[]
  bottom_info?: Bottominfo
  lat: number
  lng: number
  image_url: string
}

interface Bottominfo {
  content: string
  content_color: string
  font_size: string
  visibility: string
}

interface Review {
  comments: string
  created_at: string
  is_translated: boolean
  localized_date: string
  reviewer_image_url: string
  review_id: string
}

interface Verifyinfo {
  messages: string[]
  text_color: string
}

interface Destaddress {
  name: string
  homes: string[]
}
