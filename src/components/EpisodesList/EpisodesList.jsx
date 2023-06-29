import './EpisodesList.scss'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Paging from '../Paging/Paging';
import { EpisodesContext } from '../../context/apiContext';



function EpisodesList() {

    const episodes = useContext(EpisodesContext);

    const [page, setPage] = useState(1);
    const elementsPerPage = 8
    const totalPages = page * elementsPerPage;
    const firstPage = totalPages - elementsPerPage;
    const episodesPaged = episodes !== null ? episodes.slice(firstPage, totalPages) : null;

    const setPageTo = (page) => {
        setPage(page)
    }

    return (
        <div className='container'>
            {
                episodes && <>
                    <div className="episodesList">
                        {
                            episodesPaged.map(episode => (
                                <Link to={`/episodios/${episode.id}`}>
                                    <li className='episodeCard'>
                                        {episode.name}
                                    </li>
                                </Link>
                            ))
                        }
                    </div>
                    <Paging listLength={episodes.length} page={page} elementsPerPage={elementsPerPage} setPage={setPage} setPageTo={setPageTo} />
                </>
            }
        </div>
    );
}

export default EpisodesList;