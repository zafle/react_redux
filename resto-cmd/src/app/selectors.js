import { createSelector } from '@reduxjs/toolkit'

export const getProductList = (state) => state?.list

export const getTotalOrder = (state) =>
  getProductList(state).reduce(
    (prv, cur) => Math.round((cur.price + prv) * 100) / 100,
    0
  )

export const isVoucherAvailable = (state) =>
  getProductList(state).find((product) => product.title === 'Super Crémeux')

export const getOwnerFirstName = (state) => state?.owner.firstName

export const getSortedList = createSelector([getProductList], (list) => {
  const sortedList = list.reduce((acc, cur) => {
    const isInList = acc.find((item) => item.title === cur.title)
    if (isInList) {
      isInList.count++
    } else {
      acc.push({ title: cur.title, count: 1 })
    }
    return acc
  }, [])
  return sortedList
})

export const getProductQuantityPerName = (name) =>
  createSelector(
    [getProductList],
    (list) => list.filter((product) => product.title === name).length
  )

export const getQuantityProductPerName = (name) => (state) =>
  getProductList(state).filter((product) => product.title === name).length

export const getUnavailableProducts = (state) =>
  state?.menu?.unavailableProducts

// export const getListQuantityProductPerName = (state) =>
//   Object.values(ProductList).map((product) => ({
//     title: product.title,
//     quantity: getQuantityProductPerName(product.title)(state),
//   }))
