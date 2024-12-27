import { useDispatch, useSelector } from 'react-redux'
import { getOwnerFirstName } from '../../app/selectors'
import { ownerSlice } from './ownerSlice'

export const Owner = () => {
  const ownerFirstName = useSelector(getOwnerFirstName)
  const dispatch = useDispatch()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const firstName = evt.currentTarget.firstName.value
    dispatch(ownerSlice.actions.updateFirstName(firstName))
  }

  return (
    <form onSubmit={handleSubmit} className="OwnerForm">
      <h2>Propriétaire du restaurant</h2>
      {ownerFirstName ? (
        <span className="OwnerName">
          Le propriétaire du restaurant est {ownerFirstName}
        </span>
      ) : (
        <span className="OwnerName">
          Le propriétaire du restaurant n&#39;est pas configuré
        </span>
      )}
      <label>
        Prénom du propriétaire
        <input type="text" name="firstName" />
      </label>
      <button type="submit">configurer le propriétaire</button>
    </form>
  )
}
