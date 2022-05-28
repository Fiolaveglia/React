import Card from 'react-bootstrap/Card';
import '../ItemCard/ItemCard.css'

const ItemDetail = ({detalle}) => {
    
    return (
        <div>
            <h2>Detalle del producto</h2>
            <Card key={detalle.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={detalle.img} alt={detalle.nombre} />
                <Card.Body>
                    <Card.Title><h3>Aceite de {detalle.nombre}</h3></Card.Title>
                    <Card.Text className="text-detail">
                        {detalle.detalle}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )

}

export default ItemDetail