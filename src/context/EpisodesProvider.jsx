import { useState, useEffect } from 'react';
import { baseURL, EpisodesContext} from './apiContext';
import axios from 'axios'


const EpisodesProvider = ({ children }) => {

    const [apiData, setApiData] = useState(null);
    const [fetchStatus, setFetchStatus] = useState("loading");
    
    const fetchData = async () => {
        try {            
            const response = await axios.get(`${baseURL}/episode`)
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
        <EpisodesContext.Provider value={{apiData, fetchStatus}}>
            {children}
        </EpisodesContext.Provider>
    );
};

export default EpisodesProvider;