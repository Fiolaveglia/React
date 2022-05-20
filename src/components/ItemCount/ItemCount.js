import {useState} from 'react'
import './ItemCount.css';

const ItemCount = (props) => {
    const [count, setCount] = useState(0)
    const stock = 10
    
    const decrement = () => {
        setCount(count - 1)
        if (count <= 0) {
            setCount(0)
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
