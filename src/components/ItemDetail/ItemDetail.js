import Productos from "../Productos/Productos";

const ItemDetail = () => {
    const newItem = Productos.map(producto => producto.id)
    console.log(newItem)
}

export default ItemDetail