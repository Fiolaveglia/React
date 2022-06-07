import './CartWidget.css'
import {useContext} from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const {obtenerCantidad} = useContext(CartContext)

    const cantidad = obtenerCantidad()

    return (
        <Link to='/cart' className='CartWidget'>
            <img src='../cart-shopping-solid.svg' className='Cart' alt="cart"></img>
            <span className='Quantity'>{cantidad}</span>
        </Link>
    )
}

export default CartWidget


