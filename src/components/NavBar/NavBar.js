import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav>
            <div className="navbar">
                <img src= "./img/logo.png" alt="logo"></img>
                <button>Florales</button>
                <button>Citricos</button>
                <button>Herbales</button>
                <CartWidget/>
            </div>
            <h1>AROMATERAPIA</h1>
        </nav>
    )
}


export default NavBar