import { useState, useEffect } from 'react';
import { baseURL, EpisodeContext} from './apiContext';
import axios from 'axios'


const EpisodeProvider = ({ children, episodeId }) => {

    const [apiData, setApiData] = useState(null);
    
    const fetchData = async () => {
        try {
            const response = await axios.get(`${baseURL}/episode/${episodeId}`)    
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
        <EpisodeContext.Provider value={apiData}>
            {children}
        </EpisodeContext.Provider>
    );
};

export default EpisodeProvider;