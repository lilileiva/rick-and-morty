import './Home.scss'
// import Intro from '../../img/'
import intro from '../../img/rick-and-morty-intro.mp4'


function Home() {
    return (
        <div className="container">
            <div className='home'>
                <video autoPlay preload='auto' loop controls src={intro} width='100%'>
                </video>
            </div>
        </div>
    );
}

export default Home;