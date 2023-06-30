import './EpisodesList.scss'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Paging from '../Paging/Paging';
import { EpisodesContext } from '../../context/apiContext';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';


function EpisodesList() {

    const episodes = useContext(EpisodesContext);
    const episodesData = episodes?.apiData

    const [page, setPage] = useState(1);
    const elementsPerPage = 8
    const totalPages = page * elementsPerPage;
    const firstPage = totalPages - elementsPerPage;
    const episodesPaged = episodes?.fetchStatus === "success" ? episodesData.slice(firstPage, totalPages) : null;

    const setPageTo = (page) => {
        setPage(page)
    }

    return (
        <div className='container'>
            {
                episodes?.fetchStatus === "success" && <>
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
            {
                episodes?.fetchStatus === "loading" && <Loader />
            }
            {
                episodes?.fetchStatus === "error" && <Error />
            }
        </div>
    );
}

export default EpisodesList;