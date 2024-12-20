import { useSelector } from 'react-redux'
import { getSortedList } from '../../app/selectors'

export const Cart = () => {
  const list = useSelector(getSortedList)

  return (
    <div className="Selection">
      <h1>Choisir son menu</h1>
      {list?.map((item, index) => (
        <span key={index} className="SelectedProduct">
          {item.count} x {item.title}
        </span>
      ))}
    </div>
  )
}
