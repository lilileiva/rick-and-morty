import './EpisodeDetails.scss'
import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EpisodeContext, CharactersContext } from '../../context/apiContext';
import EpisodeProvider from '../../context/EpisodeProvider';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';


function EpisodeDetails() {

    const episode = useContext(EpisodeContext);
    const episodeData = episode?.apiData
    const characters = useContext(CharactersContext);
    const charactersData = characters?.apiData

    let filteredCharacters = []
    if (episode?.fetchStatus === "success" && characters?.fetchStatus === "success") {
        let charactersId = episodeData.characters.map(character => character.split('/')[5])
        filteredCharacters = charactersData.filter(character => {
            if (charactersId.includes((character.id).toString())) return character
        })
    }

    return (
        <div className="container">
            {
                characters?.fetchStatus === "success" &&
                episode?.fetchStatus === "success" && (
                    <div className="episodeDetails">
                        {
                            <div className='episodeInfo'>
                                <h2>Detalles del episodio</h2>
                                <p>Nombre: <b>{episodeData.name}</b></p>
                                <p>Fecha: <b>{episodeData.air_date}</b></p>
                                <p>Episodio: <b>{episodeData.episode}</b></p>
                            </div>
                        }
                        <h3 className='charactersIn'>Personajes del episodio</h3>
                        <div className="miniCards">
                            {
                                filteredCharacters.map(character => (
                                    <Link to={`/personajes/${character.id}`}>
                                        <li className='miniCharactersCard'>
                                            <img src={character.image} alt='character' />
                                            <p>{character.name}</p>
                                        </li>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                )
            }
            {
                characters?.fetchStatus === "loading" &&
                episode?.fetchStatus === "loading" && <Loader />
            }
            {
                characters?.fetchStatus === "error" &&
                episode?.fetchStatus === "error" && <Error />
            }
        </div>
    );
}

function EpisodeDetailsWrapper() {
    const { episodeId } = useParams();

    return (
        <EpisodeProvider episodeId={episodeId}>
            <EpisodeDetails />
        </EpisodeProvider>
    );
}

export default EpisodeDetailsWrapper;