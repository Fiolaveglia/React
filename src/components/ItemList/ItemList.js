import Productos from "../Productos/Productos";

function ItemList (productos) {
    return (
        productos.map (prod => (
            <Productos 
            key = {prod.id}
            nombre = {prod.nombre}
            precio = {prod.precio}
            img = {prod.img}
            stock = {prod.stock}
            />
        ))
    )
}

export default ItemList;