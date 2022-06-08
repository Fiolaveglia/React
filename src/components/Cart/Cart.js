import {useContext} from 'react'
import CartContext from '../../context/CartContext'
import '../Cart/Cart.css'

const Cart = () => {

    const {carrito, eliminarProducto} = useContext(CartContext)


    return (
        <div >
            <h1>Detalle de compra</h1>
            <div className='CartDetail'>
                {carrito.map (p => {
                    return (
                        <div key={p.id} style = {{display: 'flex', justifyContent: 'space-evenly'}}>
                            <div>{p.nombre}</div>
                            <div>Cantidad: {p.cantidad} </div>
                            <div>Precio por unidad: ${p.precio} </div>
                            <div>Subtotal: $ {p.precio * p.cantidad} </div>
                            <button onClick={() => eliminarProducto(p.id)}>x</button>
                        </div>
                    )} 
                    )
                }
            </div>
        </div>
    )

}

export default Cart