import {createContext, useState} from 'react'

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    console.log(carrito)

    const agregarItem = (productoParaAgregar) => {
        setCarrito([...carrito, productoParaAgregar])
    }

    const obtenerCantidad = () => {
        let suma = 0
        carrito.forEach(p => {
            suma += p.cantidad 
        })
        return suma 
    }


    return (
        <CartContext.Provider value = {{carrito, agregarItem, obtenerCantidad}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext