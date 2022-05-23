import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = (props) => {
    const onAdd = (cant) => {
        console.log(`Se agregaron ${cant} de productos al carrito`)
    }

    return (
    <div>
        <h2>{props.greeting}</h2>
        <ItemCount stock={10} inicial={0} onAdd={onAdd}/>
    </div>
    )
}

export default ItemListContainer