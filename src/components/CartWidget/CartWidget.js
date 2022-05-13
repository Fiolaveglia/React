import './CartWidget.css'
import shoppingBag from './bag-shopping-solid.svg'

const CartWidget = () => {
    return (
        <div>
            <img src={shoppingBag} alt="Cart widget" fill="#66806A" className="shoppingBag"/>
            3
        </div>
    )
}

export default CartWidget

