import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cartSlice } from '../features/cart/cartSlice'
import { ownerSlice } from '../features/owner/ownerSlice'
import { notesSlice } from '../features/notes/notesSlice'
// import thunk from 'redux-thunk'

export const store = configureStore({
  reducer: combineReducers({
    owner: ownerSlice.reducer,
    list: cartSlice.reducer,
    notes: notesSlice.reducer,
  }),
  // Liste des middlewares
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([
      (store) => (next) => (action) => {
        console.log('Action', action)
        next(action)
      },
      // thunk,
    ]),
})
