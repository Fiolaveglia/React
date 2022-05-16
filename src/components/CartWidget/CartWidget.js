import './CartWidget.css'
import MaterialIcon from 'react-google-material-icons'

const CartWidget = () => {
    return (
        <div className='CartWidget'>
            <MaterialIcon icon="shopping_bag" size={32} />
            <span>3</span>
        </div>
    )
}

export default CartWidget

