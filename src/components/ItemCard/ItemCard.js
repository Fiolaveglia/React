import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount";


function ItemCard (props) {
    
    const onAdd = (cant) => {
        console.log(`Se agregaron ${cant} de productos al carrito`)
    }
    
    return (
        <Card key={props.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>Aceite de {props.nombre}</Card.Title>
                <Card.Text>
                    ${props.precio}
                </Card.Text>
                <ItemCount stock={props.stock} inicial={0} onAdd={onAdd}/>
            </Card.Body>
        </Card>
    )
}

export default ItemCard;