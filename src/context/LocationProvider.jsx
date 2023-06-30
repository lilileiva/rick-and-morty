import { useState, useEffect } from 'react';
import { baseURL, LocationContext} from './apiContext';
import axios from 'axios'


const LocationProvider = ({ children, locationId }) => {

    const [apiData, setApiData] = useState(null);
    const [fetchStatus, setFetchStatus] = useState("loading");
    
    const fetchData = async () => {
        try {
            const response = await axios.get(`${baseURL}/location/${locationId}`)
            setFetchStatus("success");
            setApiData(response.data);
        } catch (error) {
            setFetchStatus("error");
            console.error('Error fetching API data:', error);
        }
    };

    useEffect(() => {        
        fetchData();
    }, []);

    return (
        <LocationContext.Provider value={{apiData, fetchStatus}}>
            {children}
        </LocationContext.Provider>
    );
};

export default LocationProvider;