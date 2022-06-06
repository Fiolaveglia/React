import Card from 'react-bootstrap/Card'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount";
import  ItemListContainer from "../ItemListContainer/ItemListContainer"
import '../ItemCard/ItemCard.css'


const ItemDetail = (props) => {

    const [cantidad, setCantidad] = useState(0)

    const onAdd = (cant) => {
        console.log(`Se agregaron ${cant} productos al carrito`)
        setCantidad(cant)
    }
    
    return (
        <div>
            <h2>Detalle del producto</h2>
            <Card key={props.id} style={{ width: '35rem'}}>
                <Card.Img variant="top" className='card-img-item' src={props.img} alt={props.nombre} />
                <Card.Body>
                    <Card.Title><h3>Aceite de {props.nombre}</h3></Card.Title>
                    <Card.Text className="text-detail">
                        {props.detalle}
                    </Card.Text>
                    {cantidad > 0 ? <Link to='/cart' className='ButtonDetail Shop'>Ir al carrito</Link> : <ItemCount stock={props.stock} inicial={1} onAdd={onAdd}/>}
                    {cantidad > 0 ? <Link to='/' className='ButtonDetail Shop'>Continuar compra</Link> : <ItemListContainer/>}
                </Card.Body>
            </Card>
        </div>
    )

}

export default ItemDetail