import { memo } from 'react'
import {
  ShowcaseItemWrapper,
  CommentWrapper,
  ImageWrapper,
  TagWrapper,
  TitleWrapper
} from './style'

export interface ShowcaseItemProps {
  tag: string
  tagColor: string
  imgUri: string
  comment: string
  title: string
  rate: number
  price: string
}

const ShowcaseItem = memo((props: ShowcaseItemProps) => {
  const { tag, tagColor, imgUri, comment, title, rate, price } = props
  return (
    <ShowcaseItemWrapper>
      {comment && <CommentWrapper>{comment}</CommentWrapper>}
      <ImageWrapper src={imgUri} alt={title} />
      <TagWrapper tagColor={tagColor}>{tag}</TagWrapper>
      <TitleWrapper>{title}</TitleWrapper>
      <div>{rate}</div>
      <div>{price}</div>
    </ShowcaseItemWrapper>
  )
})

export default ShowcaseItem
