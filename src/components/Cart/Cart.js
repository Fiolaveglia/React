import {Link} from 'react-router-dom'
import {useContext} from 'react'
import CartContext from '../../context/CartContext'
import EmptyCart from '../EmptyCart/EmptyCart'
import '../Cart/Cart.css'

const Cart = () => {

    const {carrito, eliminarProducto, limpiarCarrito, obtenerCantidad} = useContext(CartContext)

    const cant = obtenerCantidad()

    const sumaTotal = () => {
        let total = 0 
        carrito.forEach (p => {
            total += p.cantidad * p.precio
        })
        return total 
    }

    return (
        <>{cant === 0 
            ? <EmptyCart/>
            : <div>
                <h2>Detalle de compra</h2>
                <div className='detail'>
                    { 
                        carrito.map (p => {
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
                <div>
                    <h3 className='total-price'>$ {sumaTotal()}</h3>
                </div>
                    
                </div>
                <div className='botones'>
                    <button className='ButtonDetail' onClick={() => limpiarCarrito()} style={{margin: '20px'}}>Vaciar carrito</button>
                    <Link to='/' className='ButtonDetail' style={{margin: '20px'}}>Continuar comprando</Link>
                    <Link to='/chekout' className='ButtonDetail' style={{margin: '20px'}}>Pagar</Link>
                </div>
        </div>
            }
        </>
    )    

}

export default Cart