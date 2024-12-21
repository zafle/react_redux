import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'list',
  initialState: [],
  reducers: {
    addProduct(state, action) {
      state.push(action.payload)
    },
    removeProduct(state, action) {
      state.splice(action.payload, 1)
    },
    applyVoucher(state, action) {
      state.forEach((item) => {
        if (item.title === 'Super Crémeux') {
          item.price = action.payload
        }
      })
    },
  },
})
