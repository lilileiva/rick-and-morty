import './EpisodeDetails.scss'
import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EpisodeContext, CharactersContext } from '../../context/apiContext';
import EpisodeProvider from '../../context/EpisodeProvider';


function EpisodeDetails() {

    const episode = useContext(EpisodeContext);
    const characters = useContext(CharactersContext);

    let filteredCharacters = []
    if (episode && characters) {
        let charactersId = episode.characters.map(character => character.split('/')[5])
        filteredCharacters = characters.filter(character => {
            if (charactersId.includes((character.id).toString())) return character
        })
    }

    return (
        <div className="container">
            <div className="episodeDetails">
                {
                    episode && (
                        <div className='episodeInfo'>
                            <p>Nombre: <b>{episode.name}</b></p>
                            <p>Fecha: <b>{episode.air_date}</b></p>
                            <p>Episodio: <b>{episode.episode}</b></p>
                        </div>
                    )
                }
                <h2 className='charactersIn'>Personajes del episodio</h2>
                <div className="miniCards">
                    {
                        characters && filteredCharacters.map(character => (
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