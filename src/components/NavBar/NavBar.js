import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'

const NavBar = () => {

    return (
        <nav>
            <div className="navbar">
                <Link to="/"><img className="Logo" src= "../img/logo.png" alt="logo"></img></Link>
                <Link to = "/category/Floral" className='ButtonNav' >Florales</Link>
                <Link to = "/category/Citrico" className='ButtonNav'>Citricos</Link>
                <Link to = "/category/Herbal" className='ButtonNav'>Herbales</Link>
                <Link to = "/cart"><CartWidget /></Link> 
            </div>
            <h1>AROMATERAPIA</h1>
        </nav>
    )
}


export default NavBar 