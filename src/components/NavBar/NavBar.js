import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav>
            <div className="navbar">
                <img className="Logo" src= "./img/logo.png" alt="logo"></img>
                <button className='ButtonNav'>Florales</button>
                <button className='ButtonNav'>Citricos</button>
                <button className='ButtonNav'>Herbales</button>
                <CartWidget/>
            </div>
            <h1>AROMATERAPIA</h1>
        </nav>
    )
}


export default NavBar