import Productos from "../Productos/Productos";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount";
import customFetch from "../Productos/CustomFetch";

const ItemDetail = () => {
    const [product, setProduct] = useState()
    
    const onAdd = (cant) => {
        console.log(`Se agregaron ${cant} de productos al carrito`)
    }

    useEffect(() => {
        customFetch(1000, Productos)
        .then(resp => setProduct(Productos.find(p => p.id === Productos.id)))
    }, [])

    console.log(product)

    return (
        <Card key={product.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.img} alt={product.nombre} />
            <Card.Body>
                <Card.Title><h3>Aceite de {product.nombre}</h3></Card.Title>
                <Card.Text>
                    ${product.precio}
                </Card.Text>
                <ItemCount stock={product.stock} inicial={0} onAdd={onAdd}/>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail