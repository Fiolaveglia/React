import {useState} from 'react'
import './ItemCount.css';

const ItemCount = ({stock, inicial}) => {
    const [count, setCount] = useState(inicial)
    
    
    const decrement = () => {
        setCount(count - 1)
        if (count <= inicial) {
            setCount(inicial)
        } 
    }

    const increment = () => {
        setCount(count + 1)
        if (count === stock) {
            setCount(stock)
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
