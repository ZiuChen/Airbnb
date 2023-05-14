import { memo, useState, useEffect, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { HomeWrapper } from './style'
import {
  fetchGoodPriceInfoAction,
  fetchHighScoreInfoAction,
  fetchDiscountInfoAction
} from '@/store/modules/home'
import type { RootState } from '@/store'
import Title from '@/components/Title'
import Showcase from '@/components/Showcase'
import Tabs from '@/components/Tabs'
import More from '@/components/More'

const Home = memo(() => {
  const [activeIdx, setActiveIdx] = useState(0)

  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    (state: RootState) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  const tabsList = Object.keys(discountInfo?.dest_list || {})

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchGoodPriceInfoAction())
    // @ts-ignore
    dispatch(fetchHighScoreInfoAction())
    // @ts-ignore
    dispatch(fetchDiscountInfoAction())
  }, [dispatch])

  const handleTabChange = useCallback((index: number) => {
    setActiveIdx(index)
  }, [])

  return (
    <HomeWrapper>
      {!!tabsList.length && <Tabs list={tabsList} onTabChange={handleTabChange} />}
      <Title title={discountInfo.title} subTitle="来看看这些折扣房源吧" />
      {!!tabsList.length && (
        <Showcase
          // @ts-ignore
          list={discountInfo.dest_list[tabsList[activeIdx]]}
          itemWidth={100 / 3 + '%'}
        />
      )}
      <More />
      <Title title={goodPriceInfo.title} subTitle="来看看这些高性价比的房源吧" />
      <Showcase list={goodPriceInfo.list} />
      <More name={goodPriceInfo.title} />
      <Title title={highScoreInfo.title} subTitle="来看看这些高评分的房源吧" />
      <Showcase list={highScoreInfo.list} />
      <More name={highScoreInfo.title} />
    </HomeWrapper>
  )
})

export default Home
