import { createSlice } from '@reduxjs/toolkit'

export const ownerSlice = createSlice({
  name: 'owner',
  initialState: {},
  reducers: {
    updateFirstName(state, action) {
      state.firstName = action.payload
    },
  },
})
