import { useDispatch, useSelector } from 'react-redux'
import { isVoucherAvailable } from '../../app/selectors'
import { applyVoucher } from '../../app/actions'

export const Voucher = () => {
  const available = useSelector(isVoucherAvailable)
  const dispatch = useDispatch()

  return (
    <div className="Voucher">
      {available && (
        <button onClick={() => dispatch(applyVoucher(2))}>
          Appliquer ma promo Super crémeux à 2 euros
        </button>
      )}
    </div>
  )
}
