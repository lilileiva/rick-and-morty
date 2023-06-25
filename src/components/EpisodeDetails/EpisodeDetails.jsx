import './EpisodeDetails.scss'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getEpisodeDetails, clearStates } from '../../redux/actions'


function EpisodeDetails() {

    const { episodeId } = useParams()
    
    const episode = useSelector(state => state.episode);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getEpisodeDetails(episodeId))
        return () => {
            dispatch(clearStates())
        }
    }, [dispatch, episodeId]);    

    return (
        <div className="episodeDetails">
            {
                Object.keys(episode).length > 0 && <div>                    
                    <p>{episode.name}</p>
                    <p>{episode.air_date}</p>
                    <p>{episode.episode}</p>
                </div>
            }
        </div>
    );
}

export default EpisodeDetails;