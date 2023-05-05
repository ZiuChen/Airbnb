import { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { HomeWrapper } from './style'
import { fetchGoodPriceInfoAction, fetchHighScoreInfoAction } from '@/store/modules/home'
import type { RootState } from '@/store'
import Title from '@/components/Title'
import Showcase from '@/components/Showcase'

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo } = useSelector(
    (state: RootState) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchGoodPriceInfoAction())
    // @ts-ignore
    dispatch(fetchHighScoreInfoAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <Title title={goodPriceInfo.title} subTitle="来看看这些高性价比的房源吧" />
      <Showcase list={goodPriceInfo.list} />
      <Title title={highScoreInfo.title} subTitle="来看看这些高评分的房源吧" />
      <Showcase list={highScoreInfo.list} />
    </HomeWrapper>
  )
})

export default Home
