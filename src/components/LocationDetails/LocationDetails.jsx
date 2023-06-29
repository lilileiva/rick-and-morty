import './LocationDetails.scss'
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LocationContext } from '../../context/apiContext';
import LocationProvider from '../../context/LocationProvider';


function LocationDetails() {

    const location = useContext(LocationContext);

    return (
        <div className="container">
            <div className="locationDetails">
                {
                    location && (
                        <div className='locationInfo'>
                            <p>Nombre: <b>{location.name}</b></p>
                            <p>Tipo: <b>{location.type}</b></p>
                            <p>Dimensión: <b>{location.dimension}</b></p>
                            <p>Creado: <b>{new Date(location.created).toString()}</b></p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

function LocationDetailsWrapper() {
    const { locationId } = useParams();

    return (
        <LocationProvider locationId={locationId}>
            <LocationDetails />
        </LocationProvider>
    );
}

export default LocationDetailsWrapper;