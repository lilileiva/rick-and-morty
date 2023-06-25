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
                        <li>
                            {character.name}
                        </li>
                    </Link>
                ))
            }
        </div>
    );
}

export default CharactersList;