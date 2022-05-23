import './ItemListContainer.css'
import customFetch from '../Productos/CustomFetch'
import Productos from '../Productos/Productos'  
import {useState, useEffect} from 'react'
import ItemCard from '../ItemCard/ItemCard'

const ItemListContainer = (props) => {
    
    const [items, setItems] = useState ([]); 

    useEffect (() => {
        customFetch(2000, Productos)
        .then(resultado => setItems(resultado))
    }, [items]);

    console.log(items)

    return (
    <div>
        <h2>{props.greeting}</h2>
        <ItemCard productos = {items} />
    </div>)
}

export default ItemListContainer