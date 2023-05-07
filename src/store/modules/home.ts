import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  fetchGoodPriceInfo,
  fetchHighScoreInfo,
  fetchDiscountInfo,
  fetchRecommendInfo,
  GoodPriceInfo,
  HighScoreInfo,
  DiscountInfo,
  RecommendInfo
} from '@/service'

export const fetchGoodPriceInfoAction = createAsyncThunk('goodPrice', () => fetchGoodPriceInfo())

export const fetchHighScoreInfoAction = createAsyncThunk('highScore', () => fetchHighScoreInfo())

export const fetchDiscountInfoAction = createAsyncThunk('discount', () => fetchDiscountInfo())

export const fetchRecommendInfoAction = createAsyncThunk('recommend', () => fetchRecommendInfo())

export interface IInitialState {
  goodPriceInfo: GoodPriceInfo
  highScoreInfo: HighScoreInfo
  discountInfo: DiscountInfo
  recommendInfo: RecommendInfo
}

const slice = createSlice({
  name: 'home',
  initialState: {
    /**
     * 高性价比房源
     */
    goodPriceInfo: {},
    /**
     * 高分房源
     */
    highScoreInfo: {},
    /**
     * 折扣房源
     */
    discountInfo: {},
    /**
     * 热门房源
     */
    recommendInfo: {}
  } as IInitialState,
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfo(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfo(state, { payload }) {
      state.discountInfo = payload
    },
    changeRecommendInfo(state, { payload }) {
      state.recommendInfo = payload
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchGoodPriceInfoAction.fulfilled, (state, { payload }) => {
      state.goodPriceInfo = payload
    })

    builder.addCase(fetchHighScoreInfoAction.fulfilled, (state, { payload }) => {
      state.highScoreInfo = payload
    })

    builder.addCase(fetchDiscountInfoAction.fulfilled, (state, { payload }) => {
      state.discountInfo = payload
    })

    builder.addCase(fetchRecommendInfoAction.fulfilled, (state, { payload }) => {
      state.recommendInfo = payload
    })
  }
})

export const { changeGoodPriceInfo } = slice.actions
export default slice.reducer
