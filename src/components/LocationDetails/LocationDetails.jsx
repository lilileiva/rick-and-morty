import './LocationDetails.scss'
import { useEffect, useState } from 'react';
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

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (Object.keys(location).length > 0) {
            setIsLoading(false)
        }
    }, [location])

    return (
        <div className="container">
            <div className="locationDetails">
                {
                    isLoading == false ? (
                        <div className='locationInfo'>
                            <p>Nombre: <b>{location.name}</b></p>
                            <p>Tipo: <b>{location.type}</b></p>
                            <p>Dimensión: <b>{location.dimension}</b></p>                            
                            <p>Creado: <b>{new Date(location.created).toString()}</b></p>
                        </div>
                    )
                        : null
                }
            </div>
        </div>
    );
}

export default LocationDetails;