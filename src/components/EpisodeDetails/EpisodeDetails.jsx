import './EpisodeDetails.scss'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getEpisodeDetails, getAllCharacters, clearStates } from '../../redux/actions'


function EpisodeDetails() {

    const { episodeId } = useParams()

    const episode = useSelector(state => state.episode);
    const characters = useSelector(state => state.characters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEpisodeDetails(episodeId))
        dispatch(getAllCharacters())
        return () => {
            dispatch(clearStates())
        }
    }, [dispatch, episodeId]);

    let filteredCharacters = []
    if (Object.keys(episode).length > 0 && Object.keys(characters).length > 0) {
        let charactersId = episode.characters.map(character => character.split('/')[5])
        filteredCharacters = characters.filter(character => {
            if (charactersId.includes((character.id).toString())) return character
        })
    }

    return (
        <div className="episodeDetails">
            {
                Object.keys(episode).length > 0 && <div>
                    <p>{episode.name}</p>
                    <p>{episode.air_date}</p>
                    <p>{episode.episode}</p>
                </div>
            }
            {
                Object.keys(filteredCharacters).length > 0 && filteredCharacters.map(character => (
                    <Link to={`/personajes/${character.id}`}>
                        <li>
                            {character.name}
                        </li>
                    </Link>
                ))
            }
        </div>
    );
}

export default EpisodeDetails;