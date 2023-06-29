import './EpisodesList.scss'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllEpisodes, clearStates } from '../../redux/actions'
import Paging from '../Paging/Paging';


function EpisodesList() {

    const episodes = useSelector(state => state.episodes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllEpisodes())
        return () => {
            dispatch(clearStates())
        }
    }, [dispatch]);

    const [page, setPage] = useState(1);
    const elementsPerPage = 8
    const totalPages = page * elementsPerPage;
    const firstPage = totalPages - elementsPerPage;
    const episodesPaged = episodes.slice(firstPage, totalPages);

    const setPageTo = (page) => {
        setPage(page)
    }

    return (
        <div className='container'>
            <div className="episodesList">
                {
                    episodes && episodesPaged.map(episode => (
                        <Link to={`/episodios/${episode.id}`}>
                            <li className='episodeCard'>
                                {episode.name}
                            </li>
                        </Link>
                    ))
                }
            </div>
            <Paging listLength={episodes.length} page={page} elementsPerPage={elementsPerPage} setPage={setPage} setPageTo={setPageTo} />
        </div>
    );
}

export default EpisodesList;