import { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { HomeWrapper } from './style'
import { fetchGoodPriceInfoAction } from '@/store/modules/home'
import type { RootState } from '@/store'
import Title from '@/components/Title'
import ShowcaseItem from '@/components/ShowcaseItem'

const Home = memo(() => {
  const { goodPriceInfo } = useSelector(
    (state: RootState) => ({
      goodPriceInfo: state.home.goodPriceInfo
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchGoodPriceInfoAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <Title title={goodPriceInfo.title} subTitle="来看看这些高性价比的房源吧" />
      <div className="showcase">
        {goodPriceInfo?.list
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
      </div>
    </HomeWrapper>
  )
})

export default Home
