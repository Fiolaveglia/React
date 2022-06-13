import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getDoc, doc} from 'firebase/firestore'
import {db} from '../../services/Firebase'
import ItemDetail from '../ItemDetail/ItemDetail'
import '../ItemListContainer/ItemListContainer.css'


const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState([])
    const [loading, setLoading] = useState(true)
    const {productId} = useParams ()

    useEffect(() => {
        getDoc(doc(db, 'Productos',productId))
        .then(resp => {
            const producto = {id: resp.id, ...resp.data()}
            setDetalle(producto)
        }).catch(error => console.log(error))
        .finally(() => setLoading(false))

    }, [productId])

    if (loading) {
        return <h1>Cargando...</h1>
    }


    
    return (
        <div className='CardContainer'>
            {<ItemDetail {...detalle}/> }
        </div>
    )
}

export default ItemDetailContainer