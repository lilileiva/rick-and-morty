import { useState, useEffect } from 'react';
import { baseURL, LocationContext} from './apiContext';
import axios from 'axios'


const LocationProvider = ({ children, locationId }) => {

    const [apiData, setApiData] = useState(null);
    
    const fetchData = async () => {
        try {
            const response = await axios.get(`${baseURL}/location/${locationId}`)    
            setApiData(response.data);
        } catch (error) {
            setApiData(error);
            console.error('Error fetching API data:', error);
        }
    };

    useEffect(() => {        
        fetchData();
    }, []);

    return (
        <LocationContext.Provider value={apiData}>
            {children}
        </LocationContext.Provider>
    );
};

export default LocationProvider;