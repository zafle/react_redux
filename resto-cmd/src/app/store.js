import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createReducer } from '@reduxjs/toolkit'
import { updateFirstName } from './actions'
import { cartSlice } from '../features/cart/cartSlice'

let ownerInitialState = {
  owner: {
    firstName: null,
  },
}

const reducer = createReducer(ownerInitialState, (builder) => {
  builder.addCase(updateFirstName, (state, action) => {
    state.owner.firstName = action.payload
  })
})

export const store = configureStore({
  reducer: combineReducers({
    owner: reducer,
    list: cartSlice.reducer,
  }),
})
