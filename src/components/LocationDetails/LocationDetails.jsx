import './LocationDetails.scss'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getLocationDetails, clearStates } from '../../redux/actions'


function LocationDetails() {

    const { locationId } = useParams()
    
    const location = useSelector(state => state.location);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getLocationDetails(locationId))
        return () => {
            dispatch(clearStates())
        }
    }, [dispatch, locationId]);    

    return (
        <div className="locationDetails">
            {
                Object.keys(location).length > 0 && <div>                    
                    <p>{location.name}</p>
                    <p>{location.type}</p>
                    <p>{location.dimension}</p>
                    <p>{location.created}</p>
                </div>
            }
        </div>
    );
}

export default LocationDetails;