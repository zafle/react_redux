import { Products } from '../../common/models'
import { useStore } from 'react-redux'

export function Shop() {
  const store = useStore()

  function handleClick(item) {
    store.dispatch({
      type: 'ADD_PRODUCT',
      payload: item,
    })
  }

  return (
    <div>
      <h1>Choisissez vos produits :</h1>
      <ul>
        {Products.map((item, index) => (
          <li key={`${index}-product`}>
            <button onClick={() => handleClick(item)}>
              {item.title} {item.price} €
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
