import { useDispatch, useSelector } from 'react-redux'
import * as Products from '../../common/models'
import { ProductCard } from '../productCard/ProductCard'
import { addProductThunk } from '../cart/cartSlice'
import { getUnavailableProducts } from '../../app/selectors'
import { getUnavailableThunk } from './menuSlice'
import { useEffect } from 'react'

export function Menu() {
  const dispatch = useDispatch()
  const unavailableProducts = useSelector(getUnavailableProducts)
  console.log('unavailableProducts', unavailableProducts)
  const productsArray = Object.values(Products)

  useEffect(() => {
    dispatch(getUnavailableThunk())
  }, [dispatch])

  return (
    <div className="Menu">
      <h1>Produits disponibles à la commande</h1>
      {productsArray.map((product, index) => (
        <ProductCard
          key={`${index}-product`}
          product={product}
          unavailable={unavailableProducts?.includes(product.title)}
          onSelect={() => dispatch(addProductThunk(product))}
        />
      ))}
    </div>
  )
}
