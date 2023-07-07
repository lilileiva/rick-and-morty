import './Home.scss'
import portal from '../../img/rick-and-morty-portal.png'


function Home() {
    return (
        <div className="container">
            <div className='home'>
                <img src={portal} alt="Rick and Morty" className="portal" />
            </div>
        </div>
    );
}

export default Home;