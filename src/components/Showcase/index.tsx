import { memo } from 'react'
import ShowcaseItem from '@/components/ShowcaseItem'
import { ShowcaseWrapper } from './style'

export interface ShowcaseItemProps {
  list: any[]
  itemWidth?: string
}

const Showcase = memo((props: ShowcaseItemProps) => {
  const { list, itemWidth } = props

  return (
    <ShowcaseWrapper>
      {list
        ?.slice(0, 8)
        .map(
          ({
            id,
            verify_info,
            picture_url,
            name,
            bottom_info,
            reviews_count,
            star_rating,
            price_format
          }) => (
            <ShowcaseItem
              itemWidth={itemWidth}
              key={id}
              tag={verify_info.messages.join(' ')}
              tagColor={verify_info.text_color}
              imgUri={picture_url}
              title={name}
              comment={bottom_info?.content || ''}
              reviews={reviews_count}
              rate={star_rating ?? 2.5}
              price={price_format}
            />
          )
        )}
    </ShowcaseWrapper>
  )
})

export default Showcase
