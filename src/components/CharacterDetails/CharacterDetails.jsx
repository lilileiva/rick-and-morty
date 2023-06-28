import './CharacterDetails.scss'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getCharacterDetails, clearStates } from '../../redux/actions'


function CharacterDetails() {

    const { characterId } = useParams()

    const character = useSelector(state => state.character);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCharacterDetails(characterId))
        return () => {
            dispatch(clearStates())
        }
    }, [dispatch, characterId]);    

    return (
        <div className="characterDetails">
            {
                Object.keys(character).length > 0 && <div>
                    <img src={character.image} alt='character' />
                    <p>{character.name}</p>
                    <p>{character.type}</p>
                    <p>{character.status}</p>
                    <p>{character.gender}</p>
                    <p>{character.species}</p>
                    {
                        character.origin.name != 'unknown'
                            ? <Link to={`/ubicaciones/${character.origin.url.split('/')[5]}`}>
                                <a>{character.origin.name}</a>
                            </Link>
                            : <a>{character.origin.name}</a>
                    }
                </div>
            }
        </div>
    );
}

export default CharacterDetails;