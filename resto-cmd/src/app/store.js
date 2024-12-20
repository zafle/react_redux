import { configureStore } from '@reduxjs/toolkit'
import { createReducer } from '@reduxjs/toolkit'
import {
  addProduct,
  applyVoucher,
  removeProduct,
  updateFirstName,
} from './actions'

let initialState = {
  value: null,
  list: [],
  owner: {
    firstName: null,
  },
}

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(addProduct, (state, action) => {
    state.list.push(action.payload)
  })
  builder.addCase(removeProduct, (state, action) => {
    state.list.filter((item, index) => index !== action.payload)
  })
  builder.addCase(applyVoucher, (state, action) => {
    state.list.forEach((item) => {
      if (item.title === 'Super Crémeux') {
        item.price = action.payload // Modification directe
      }
    })
  })
  builder.addCase(updateFirstName, (state, action) => {
    state.owner.firstName = action.payload
  })
})

export const store = configureStore({
  preloadedState: initialState,
  reducer,
})
