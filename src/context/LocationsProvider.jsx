import { useState, useEffect } from 'react';
import { baseURL, LocationsContext} from './apiContext';
import axios from 'axios'


const LocationsProvider = ({ children }) => {

    const [apiData, setApiData] = useState(null);
    
    const fetchData = async () => {
        try {            
            const response = await axios.get(`${baseURL}/location`)            
            setApiData(response.data.results);
        } catch (error) {
            setApiData(error);
            console.error('Error fetching API data:', error);
        }
    };

    useEffect(() => {        
        fetchData();
    }, []);

    return (
        <LocationsContext.Provider value={apiData}>
            {children}
        </LocationsContext.Provider>
    );
};

export default LocationsProvider;