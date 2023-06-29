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
        <div className="container">
            <div className="characterDetails">
                {
                    Object.keys(character).length > 0 && (
                        <div>
                            <img src={character.image} alt='character' />
                            <div className="characterInfo">
                                <p>Name: <b>{character.name}</b></p>
                                <p>Tipo: {character.type == null ? <b>{character.type}</b> : "..."}</p>
                                <p>Estado: <b>{character.status}</b></p>
                                <p>Género: <b>{character.gender}</b></p>
                                <p>Especie: <b>{character.species}</b></p>
                                {
                                    character.origin.name != 'unknown'
                                        ? <Link to={`/ubicaciones/${character.origin.url.split('/')[5]}`}>
                                            <a>Planeta: <b>{character.origin.name}</b></a>
                                        </Link>
                                        : <a>Planeta: <b>Desconocido</b></a>
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default CharacterDetails;