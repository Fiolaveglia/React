import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {getDocs, collection, query, where} from 'firebase/firestore'
import {db} from '../../services/Firebase'


const ItemListContainer = (props) => {
    
    const [items, setItems] = useState ([]); 
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect (() => {

        const collectionRef = categoryId
            ? query(collection(db, 'Productos'), where('categoria', '==', categoryId))
            : collection(db, 'Productos')
        
        getDocs(collectionRef)
            .then(resp => {
                const Products = resp.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                setItems(Products)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))         
    }, [categoryId]);

    if (loading) {
        return <h1>Cargando...</h1>
    }


    return (
    <div>
        <div className='CardContainer'>
            {items.length > 0 ? <ItemList productos = {items} /> : <h2> No hay productos</h2>}
        </div>
    </div>)
}

export default ItemListContainer