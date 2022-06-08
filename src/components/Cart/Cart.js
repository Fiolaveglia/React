import {useContext} from 'react'
import CartContext from '../../context/CartContext'

const Cart = () => {

    const {carrito} = useContext(CartContext)

    return (
        <div >
            <h1>Detalle de compra</h1>
            <div className='CartDetail'>
                {carrito.map (p => {
                    return (
                        <div style = {{display: 'flex', justifyContent: 'space-evenly'}}>
                            <div key={p.id}>{p.nombre}</div>
                            <div>Cantidad: {p.cantidad} </div>
                            <div>Precio por unidad: ${p.precio} </div>
                            <div>Subtotal: $ {p.precio * p.cantidad} </div>
                        </div>
                    )} 
                    )
                }
            </div>
        </div>
    )

}

export default Cart