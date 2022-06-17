import {Link} from 'react-router-dom'
import {useContext} from 'react'
// import {addDoc, collection} from 'firebase/firestore'
// import {db} from '../../services/Firebase'
import CartContext from '../../context/CartContext'
import EmptyCart from '../EmptyCart/EmptyCart'
import '../Cart/Cart.css'

const Cart = () => {

    const {carrito, eliminarProducto, limpiarCarrito, obtenerCantidad, sumaTotal} = useContext(CartContext)

    const cant = obtenerCantidad()

    // const crearOrden = () => {
    //     console.log('se genero la orden')
    //     const ObjOrden = {
    //         cliente: {
    //             nombre: 'Fiorella Laveglia',
    //             direccion: 'Ejido 1319 / 501',
    //             tel: '096422000',
    //             mail: 'fiolaveglia@gmail.com'
    //         },
    //         items: carrito,
    //         total: sumaTotal()
    //     }

    //     const coleccion = collection(db, 'ordenes')
    //     addDoc(coleccion, ObjOrden).then(({ id }) => {
    //         console.log(`Se creo la orden con el id Nº ${id}`)
    //     })
    // }

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
                    <h4 className='total-price'>$ {sumaTotal()}</h4>
                </div>
                    
                </div>
                <div className='botones'>
                    <button className='ButtonDetail' onClick={() => limpiarCarrito()} style={{margin: '20px'}}>Vaciar carrito</button>
                    <Link to ='/' className='ButtonDetail'  style={{margin: '20px'}}>Continuar comprando</Link>
                    <Link to ='/order' className='ButtonDetail' style={{margin: '20px'}}>Finalizar compra</Link>
                </div>
        </div>
            }
        </>
    )    

}

export default Cart