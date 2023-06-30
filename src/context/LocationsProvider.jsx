import { useState, useEffect } from 'react';
import { baseURL, LocationsContext} from './apiContext';
import axios from 'axios'


const LocationsProvider = ({ children }) => {

    const [apiData, setApiData] = useState(null);
    const [fetchStatus, setFetchStatus] = useState("loading");
    
    const fetchData = async () => {
        try {            
            const response = await axios.get(`${baseURL}/location`)
            setFetchStatus("success");     
            setApiData(response.data.results);
        } catch (error) {
            setFetchStatus("error");
            console.error('Error fetching API data:', error);
        }
    };

    useEffect(() => {        
        fetchData();
    }, []);

    return (
        <LocationsContext.Provider value={{apiData, fetchStatus}}>
            {children}
        </LocationsContext.Provider>
    );
};

export default LocationsProvider;