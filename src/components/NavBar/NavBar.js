import './NavBar.css'
import logo from './img/logo.png'

const NavBar = () => {
    return (
        <nav>
            <div className="navbar">
                <img src= {logo} alt="logo"></img>
                <button>Florales</button>
                <button>Citricos</button>
                <button>Herbales</button>
            </div>
            <h1>AROMATERAPIA</h1>
        </nav>
    )
}

export default NavBar