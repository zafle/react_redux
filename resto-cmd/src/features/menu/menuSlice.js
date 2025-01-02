import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getUnavailableThunk = createAsyncThunk(
  'menu/getUnavailableThunk',
  async () => {
    const response = await fetch(
      'https://gist.githubusercontent.com/techerjeansebastienpro/f28e00c733c8e0b3fda7718072076ff3/raw/7fd0e66c68afeea5171255396d7e04493a457e50/unavailable.json'
    )
    return response.json()
  }
)
export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    unavailableProducts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUnavailableThunk.fulfilled, (state, action) => {
      action.payload.forEach((product) => {
        state.unavailableProducts.push(product)
      })
    })
  },
})
