import { useState, useEffect } from 'react';
import { baseURL, CharactersContext} from './apiContext';
import axios from 'axios'


const CharactersProvider = ({ children }) => {

    const [apiData, setApiData] = useState(null);
    
    const fetchData = async () => {
        try {            
            const response = await axios.get(`${baseURL}/character`)            
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
        <CharactersContext.Provider value={apiData}>
            {children}
        </CharactersContext.Provider>
    );
};

export default CharactersProvider;



