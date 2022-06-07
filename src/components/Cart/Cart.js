import {useContext} from 'react'
import CartContext from '../../context/CartContext'

const Cart = () => {

    const {carrito} = useContext(CartContext)

    return (
        <div >
            <h1>Detalle de compra</h1>
            <div className='CartDetail'>
                {carrito.map (p => <div key={p.id}>{p.nombre}</div>)}
            </div>
        </div>
    )

}

export default Cart