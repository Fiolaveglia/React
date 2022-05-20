import {useState} from 'react'
import './ItemCount.css';

const ItemCount = (props) => {
    const [count, setCount] = useState(props.inicial)
    
    
    const decrement = () => {
        setCount(count - 1)
        if (count <= props.inicial) {
            setCount(props.inicial)
        } 
    }

    const increment = () => {
        setCount(count + 1)
        if (count === props.stock) {
            setCount(props.stock)
        }
    }


    return (
            <div className='ItemCount'>
                <button className='ButtonCounter' onClick={decrement}>-</button>
                <span className='Quantity'>{count}</span>
                <button className='ButtonCounter' onClick={increment}>+</button>
            </div>
    )
}

export default ItemCount;
