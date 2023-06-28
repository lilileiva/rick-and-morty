import './Navbar.scss'
import RickAndMorty from '../../img/Rick-And-Morty-Logo.png'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarContainer">
                <Link to="/">
                    <img src={RickAndMorty} alt="Rick and Morty" className="navbarLogo" />
                </Link>
                <div className="navbarButtons">
                    <Link to="/personajes">
                        <button className="navbarButton">
                            PERSONAJES
                        </button>
                    </Link>
                    <Link to="/ubicaciones">
                        <button className="navbarButton">
                            UBICACIONES
                        </button>
                    </Link>
                    <Link to="/episodios">
                        <button className="navbarButton">
                            EPISODIOS
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;