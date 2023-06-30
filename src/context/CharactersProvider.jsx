import { useState, useEffect } from 'react';
import { baseURL, CharactersContext} from './apiContext';
import axios from 'axios'


const CharactersProvider = ({ children }) => {

    const [apiData, setApiData] = useState(null);
    const [fetchStatus, setFetchStatus] = useState("loading");
    
    const fetchData = async () => {
        try {            
            const response = await axios.get(`${baseURL}/character`)       
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
        <CharactersContext.Provider value={{apiData, fetchStatus}}>
            {children}
        </CharactersContext.Provider>
    );
};

export default CharactersProvider;



