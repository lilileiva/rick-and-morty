import './EpisodesList.scss'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllEpisodes, clearStates } from '../../redux/actions'


function EpisodesList() {

    const episodes = useSelector(state => state.episodes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllEpisodes())
        return () => {
            dispatch(clearStates())
        }
    }, [dispatch]);

    return (
        <div className="episodesList">
            {
                episodes && episodes.map(episode => (
                    <Link to={`/episodios/${episode.id}`}>
                        <li>
                            {episode.name}
                        </li>
                    </Link>
                ))
            }
        </div>
    );
}

export default EpisodesList;