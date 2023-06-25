import './LocationsList.scss'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllLocations, clearStates } from '../../redux/actions'


function LocationsList() {

    const locations = useSelector(state => state.locations);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllLocations())
        return () => {
            dispatch(clearStates())
        }
    }, [dispatch]);

    return (
        <div className="locationsList">
            {
                locations && locations.map(location => (
                    <Link to={`/ubicaciones/${location.id}`}>
                        <li>
                            {location.name}
                        </li>
                    </Link>
                ))
            }
        </div>
    );
}

export default LocationsList;