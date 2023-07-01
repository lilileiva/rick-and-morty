import './Home.scss'
import intro from '../../img/rick-and-morty-intro.mp4'
import pepino from '../../img/rick-and-morty-pepino.png'


function Home() {
    return (
        <div className="container">
            <div className='home'>
                <video autoPlay preload='auto' loop controls src={intro} width='100%'>
                </video>
            </div>
            <div className="pepinos">
                <img src={pepino} alt='pepino' className='pepino' />
                <img src={pepino} alt='pepino' className='pepino' />
                <img src={pepino} alt='pepino' className='pepino' />
                <img src={pepino} alt='pepino' className='pepino' />
                <img src={pepino} alt='pepino' className='pepino' />
                <img src={pepino} alt='pepino' className='pepino' />
                <img src={pepino} alt='pepino' className='pepino' />
                <img src={pepino} alt='pepino' className='pepino' />
                <img src={pepino} alt='pepino' className='pepino' />
            </div>
        </div>
    );
}

export default Home;