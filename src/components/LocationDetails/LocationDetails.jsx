import './LocationDetails.scss'
import '../../App.scss'
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LocationContext } from '../../context/apiContext';
import LocationProvider from '../../context/LocationProvider';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';


function LocationDetails() {

    const location = useContext(LocationContext);
    const locationData = location?.apiData

    return (
        <div className="container">
            <div className="locationDetails">
                {
                    location?.fetchStatus === "success" && (
                        <div className='locationInfo'>
                            <h2>Detalles del episodio</h2>
                            <p>Nombre: <b>{locationData.name}</b></p>
                            <p>Tipo: <b>{locationData.type}</b></p>
                            <p>Dimensión: <b>{locationData.dimension}</b></p>
                            <p>Creado: <b>{new Date(locationData.created).toString()}</b></p>
                        </div>
                    )
                }
                {
                location?.fetchStatus === "loading" && <Loader />
            }
            {
                location?.fetchStatus === "error" && <Error />
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