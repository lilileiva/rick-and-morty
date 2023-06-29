import './CharactersList.scss'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Paging from '../Paging/Paging';
import { CharactersContext } from '../../context/apiContext';


function CharactersList() {

    const characters = useContext(CharactersContext);

    const [page, setPage] = useState(1);
    const elementsPerPage = 8
    const totalPages = page * elementsPerPage;
    const firstPage = totalPages - elementsPerPage;
    const charactersPaged = characters !== null ? characters.slice(firstPage, totalPages) : null;

    const setPageTo = (page) => {
        setPage(page)
    }

    return (
        <div className='container'>
            {
                characters && <>
                    <div className="charactersList">
                        {
                            charactersPaged.map(character => (
                                <Link to={`/personajes/${character.id}`}>
                                    <li className='characterCard'>
                                        <img src={character.image} alt='character' />
                                        <p className='characterName'>{character.name}</p>
                                        <p className='characterSpecie'>{character.species}</p>
                                    </li>
                                </Link>
                            ))
                        }
                    </div>
                    <Paging listLength={characters.length} page={page} elementsPerPage={elementsPerPage} setPage={setPage} setPageTo={setPageTo} />
                </>
            }
        </div>
    );
}

export default CharactersList;