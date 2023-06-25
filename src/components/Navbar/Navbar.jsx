import './Navbar.scss'
import RickAndMorty from '../../img/Rick-And-Morty.png'
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
                            Personajes
                        </button>
                    </Link>
                    <Link to="/ubicaciones">
                        <button className="navbarButton">
                            Ubicaciones
                        </button>
                    </Link>
                    <Link to="/episodios">
                        <button className="navbarButton">
                            Episodios
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;