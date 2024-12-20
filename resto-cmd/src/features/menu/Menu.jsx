import { useDispatch } from 'react-redux'
import * as Products from '../../common/models'
import { ProductCard } from '../productCard/ProductCard'
import { addProduct } from '../../app/actions'

export function Menu() {
  const dispatch = useDispatch()
  const productsArray = Object.values(Products)

  return (
    <div className="Menu">
      <h1>Produits disponibles à la commande</h1>
      {productsArray.map((product, index) => (
        <ProductCard
          key={`${index}-product`}
          product={product}
          onSelect={() => dispatch(addProduct(product))}
        />
      ))}
    </div>
  )
}
