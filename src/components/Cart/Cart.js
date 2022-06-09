import {useContext} from 'react'
import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import '../Cart/Cart.css'

const Cart = () => {

    const {carrito, eliminarProducto, limpiarCarrito} = useContext(CartContext)


    return (
        <div>
            <h2>Detalle de compra</h2>

            <div className='detail'>
                {carrito.map (p => {
                    return (
                        <div className="columns" key={p.id}>
                        <div className="product-image">
                            <img src={p.img} alt= {p.nombre}/>
                        </div>
                        <div className="product-title">Aceite de {p.nombre}</div>
                        <div className="product-price">$ {p.precio}</div>
                        <div className="product-quantity">
                            <input type="number" value={p.cantidad} min="1" />
                        </div>
                        <div className="product-removal">
                        <button className="remove-product" onClick={() => eliminarProducto(p.id)}>
                            Eliminar
                        </button>
                        </div>
                        <div className="product-line-price">$ {p.precio * p.cantidad}</div>
                    </div>
                        )} 
                    )
                }
            </div>
            <div className='botones'>
                <button className='ButtonDetail' onClick={() => limpiarCarrito()} style={{margin: '20px'}}>Vaciar carrito</button>
                <Link to='/' className='ButtonDetail' style={{margin: '20px'}}>Continuar comprando</Link>
            </div>
        </div>
    )

}

export default Cart