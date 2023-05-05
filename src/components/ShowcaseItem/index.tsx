import { memo } from 'react'
import { Rating } from '@mui/material'
import {
  ShowcaseItemWrapper,
  CommentWrapper,
  ImageWrapper,
  TagWrapper,
  TitleWrapper,
  RateWrapper
} from './style'

export interface ShowcaseItemProps {
  itemWidth?: string

  tag: string
  tagColor: string
  imgUri: string
  comment: string
  title: string
  reviews: number
  rate: number
  price: string
}

const ShowcaseItem = memo((props: ShowcaseItemProps) => {
  const { itemWidth } = props
  const { tag, tagColor, imgUri, comment, title, reviews, rate, price } = props
  return (
    <ShowcaseItemWrapper itemWidth={itemWidth}>
      {comment && <CommentWrapper>{comment}</CommentWrapper>}
      <ImageWrapper src={imgUri} alt={title} />
      <TagWrapper tagColor={tagColor}>{tag}</TagWrapper>
      <TitleWrapper>{title}</TitleWrapper>
      <div>{price}/晚</div>
      <RateWrapper>
        <Rating value={rate} precision={0.5} readOnly sx={{ color: '#00848a' }} />
        <span>{reviews}</span>
        <span>{comment}</span>
      </RateWrapper>
    </ShowcaseItemWrapper>
  )
})

export default ShowcaseItem
