import {useContext} from 'react'
import CartContext from '../../context/CartContext'
import '../Cart/Cart.css'

const Cart = () => {

    const {carrito, eliminarProducto, limpiarCarrito} = useContext(CartContext)


    return (
        <div >
            <h2>Detalle de compra</h2>
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
            <button className='Eliminar' onClick={() => limpiarCarrito()} style={{display: 'block', width: '100px', margin: '20px auto'}}>Vaciar carrito</button>
        </div>
    )

}

export default Cart