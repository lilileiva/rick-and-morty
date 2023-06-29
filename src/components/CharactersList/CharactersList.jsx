import './CharactersList.scss'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCharacters, clearStates } from '../../redux/actions'
import { Link } from 'react-router-dom';
import Paging from '../Paging/Paging';


function CharactersList() {

    const characters = useSelector(state => state.characters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCharacters())
        return () => {
            dispatch(clearStates())
        }
    }, [dispatch]);

    const [page, setPage] = useState(1);
    const elementsPerPage = 6
    const totalPages = page * elementsPerPage;
    const firstPage = totalPages - elementsPerPage;
    const charactersPaged = characters.slice(firstPage, totalPages);

    const setPageTo = (page) => {
        setPage(page)
    }

    return (
        <div className='container'>
            <div className="charactersList">
                {
                    characters && charactersPaged.map(character => (
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
            <Paging listLength={characters.length} page={page} elementsPerPage={elementsPerPage} setPage={setPage} setPageTo={setPageTo} />
        </div>
    );
}

export default CharactersList;