export interface DiscountInfo {
  _id: string
  type: string
  title: string
  subtitle: string
  dest_address: Destaddress[]
  dest_list: Destlist
}

interface Destlist {
  佛山: _[]
  成都: _2[]
  广州: _3[]
  重庆: _2[]
  长沙: _4[]
  杭州: _2[]
  西安: _2[]
  深圳: _5[]
}

interface _5 {
  id: string
  picture_url: string
  verify_info: Verifyinfo
  name: string
  price: number
  price_format: string
  star_rating: number
  star_rating_color: string
  reviews_count: number
  reviews?: Review[]
  bottom_info?: Bottominfo
  lat: number
  lng: number
  image_url: string
}

interface _4 {
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
  reviews: Review[]
  bottom_info?: Bottominfo
  lat: number
  lng: number
  image_url: string
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
  star_rating?: number
  star_rating_color: string
  reviews_count: number
  reviews?: Review[]
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
