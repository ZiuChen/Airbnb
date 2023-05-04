import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchGoodPriceInfo, GoodPriceInfo } from '@/service'

export const fetchGoodPriceInfoAction = createAsyncThunk('fetch', async () => {
  const res = await fetchGoodPriceInfo()
  return res
})

const slice = createSlice({
  name: 'home',
  initialState: {
    /**
     * 高性价比
     */
    goodPriceInfo: {}
  } as { goodPriceInfo: GoodPriceInfo },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: {
    [fetchGoodPriceInfoAction.fulfilled.type]: (state, { payload }) => {
      state.goodPriceInfo = payload
    }
  }
})

export const { changeGoodPriceInfo } = slice.actions
export default slice.reducer
