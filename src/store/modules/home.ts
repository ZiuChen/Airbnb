import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchGoodPriceInfo, fetchHighScoreInfo, GoodPriceInfo, HighScoreInfo } from '@/service'

export const fetchGoodPriceInfoAction = createAsyncThunk('goodPrice', async () => {
  const res = await fetchGoodPriceInfo()
  return res
})

export const fetchHighScoreInfoAction = createAsyncThunk('highScore', async () => {
  const res = await fetchHighScoreInfo()
  return res
})

const slice = createSlice({
  name: 'home',
  initialState: {
    /**
     * 高性价比
     */
    goodPriceInfo: {},
    highScoreInfo: {}
  } as { goodPriceInfo: GoodPriceInfo; highScoreInfo: HighScoreInfo },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfo(state, { payload }) {
      state.highScoreInfo = payload
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchGoodPriceInfoAction.fulfilled, (state, { payload }) => {
      state.goodPriceInfo = payload
    })

    builder.addCase(fetchHighScoreInfoAction.fulfilled, (state, { payload }) => {
      state.highScoreInfo = payload
    })
  }
})

export const { changeGoodPriceInfo } = slice.actions
export default slice.reducer
