import { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchGoodPriceInfoAction } from '@/store/modules/home'
import type { RootState } from '@/store'
import Title from '@/components/Title'

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
    <div>
      <Title title={goodPriceInfo.title} subTitle="来看看这些高性价比的房源吧" />
    </div>
  )
})

export default Home
