import { useState, useEffect } from 'react';
import { baseURL, EpisodesContext} from './apiContext';
import axios from 'axios'


const EpisodesProvider = ({ children }) => {

    const [apiData, setApiData] = useState(null);
    
    const fetchData = async () => {
        try {            
            const response = await axios.get(`${baseURL}/episode`)            
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
        <EpisodesContext.Provider value={apiData}>
            {children}
        </EpisodesContext.Provider>
    );
};

export default EpisodesProvider;