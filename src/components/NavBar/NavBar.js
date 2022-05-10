import './NavBar.css'
import logo from './img/logo.png'

const NavBar = () => {
    return (
        <nav>
            <img src= {logo} alt="logo"></img>
            <div className="navbar">
                <button>Florales</button>
                <button>Citricos</button>
                <button>Herbales</button>
            </div>
            <h1>AROMATERAPIA</h1>
        </nav>
    )
}

export default NavBar