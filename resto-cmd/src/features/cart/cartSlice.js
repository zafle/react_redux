import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProductQuantityPerName } from '../../app/selectors'
import * as Products from '../../common/models'

const TIME_TO_RESET = 10000

let timeOutInstance = null

export const resetProductThunk = createAsyncThunk(
  'cart/resetProductThunk',
  async () => {
    if (timeOutInstance) {
      console.log('timeOutInstance', timeOutInstance)
      clearTimeout(timeOutInstance)
    }

    return new Promise((resolve, reject) => {
      console.log('promesse reset envoyée :', new Date())
      timeOutInstance = setTimeout(() => {
        reject()
      }, TIME_TO_RESET)
    })
  }
)

export const addProductThunk = createAsyncThunk(
  'cart/addProductThunk',
  async (product, thunkApi) => {
    thunkApi.dispatch(cartSlice.actions.addProduct(product))
    thunkApi.dispatch(resetProductThunk())

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const state = thunkApi.getState()
        const numberForSpecialOffer =
          getProductQuantityPerName('Poulet Croquant')(state)

        if (numberForSpecialOffer === 2) {
          if (
            window.confirm(
              'Voulez-vous ajouter une troisième fois ce produit à moitié prix ?'
            )
          ) {
            resolve()
          } else {
            reject()
          }
        }
      }, 5000)
    })
  }
)

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
  extraReducers: (builder) => {
    builder.addCase(addProductThunk.fulfilled, (state) => {
      const specialOffer = Products.PouletCroquant
      state.push({
        ...specialOffer,
        price: Math.round((Products.PouletCroquant.price / 2) * 100) / 100,
      })
    })
    builder.addCase(addProductThunk.rejected, () => {})
    builder.addCase(resetProductThunk.fulfilled, () => {
      console.log(
        'promesse résolue : le panier devrait être encore valide',
        new Date()
      )
    })
    builder.addCase(resetProductThunk.rejected, (state) => {
      state.length = 0
      console.log('promesse rejetée : le panier devrait être vide', new Date())
    })
  },
})
