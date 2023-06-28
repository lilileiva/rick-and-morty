import './CharactersList.scss'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCharacters, clearStates } from '../../redux/actions'
import { Link } from 'react-router-dom';


function CharactersList() {

    const characters = useSelector(state => state.characters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCharacters())
        return () => {
            dispatch(clearStates())
        }
    }, [dispatch]);

    return (
        <div className="charactersList">
            {
                characters && characters.map(character => (
                    <Link to={`/personajes/${character.id}`}>
                        <li className='characterCard'>
                            <img src={character.image} alt='character' />
                            <p>Nombre: {character.name}</p>
                            <p>Especie: {character.species}</p>
                        </li>
                    </Link>
                ))
            }
        </div>
    );
}

export default CharactersList;