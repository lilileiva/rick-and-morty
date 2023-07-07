import './CharactersList.scss'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Paging from '../Paging/Paging';
import { CharactersContext } from '../../context/apiContext';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';


function CharactersList() {

    const characters = useContext(CharactersContext);
    let charactersData = characters?.apiData

    const [page, setPage] = useState(1);
    const elementsPerPage = 8
    const totalPages = page * elementsPerPage;
    const firstPage = totalPages - elementsPerPage;
    const charactersPaged = characters?.fetchStatus === "success" ? charactersData.slice(firstPage, totalPages) : null;

    const setPageTo = (page) => {
        setPage(page)
    }

    return (
        <div className='container'>
            {
                characters?.fetchStatus === "success" && <div className='listContainer'>
                    <div className="charactersList">
                        {
                            charactersPaged.map(character => (
                                <Link to={`/personajes/${character.id}`}>
                                    <li className='characterCard'>
                                        <img src={character.image} alt='character' />
                                        <div className="characterDescription">
                                            <p className='characterName'>{character.name}</p>
                                            <p className='characterSpecie'>{character.species}</p>
                                        </div>
                                    </li>
                                </Link>
                            ))
                        }
                    </div>
                    <Paging listLength={charactersData.length} page={page} elementsPerPage={elementsPerPage} setPage={setPage} setPageTo={setPageTo} />
                </div>
            }
            {
                characters?.fetchStatus === "loading" && <Loader />
            }
            {
                characters?.fetchStatus === "error" && <Error />
            }
        </div>
    );
}

export default CharactersList;