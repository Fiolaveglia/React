import {useState} from 'react'
import './ItemCount.css';

const ItemCount = (props) => {
    const [count, setCount] = useState(0)


    const decrement = () => {
        if (count <= 0) {
            setCount(0)
        } else {
        setCount(count - 1) 
    }
    }

    const increment = () => {
        setCount(count + 1)
    }


    return (
        <div className="Card">
            <img src="./img/products/Naranja.jpg" alt={props.name}></img>
            <h3>Aceite de {props.name}</h3>
            <span>$1095</span>
            <div className='buttons'>
                <button className='ButtonCounter' onClick={decrement}>-</button>
                <span className='Quantity'>{count}</span>
                <button className='ButtonCounter' onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default ItemCount;

/*
<img src="../img/Aceites escenciales/${item.nombre}.jpg" class="card-img-top" alt="${item.nombre}">
                        <div class="card-body">
                            <h5 class="card-title">Aceite de ${item.nombre}</h5>
                            <button class="btn btn-primary" id=${item.id}>Agregar al carrito</button>
                            <span class="precio">${item.precio}</span>
                        </div>`;
                        */