import { useState, useEffect } from 'react';
import { baseURL, CharacterContext} from './apiContext';
import axios from 'axios'


const CharacterProvider = ({ children, characterId }) => {

    const [apiData, setApiData] = useState(null);
    
    const fetchData = async () => {
        try {
            const response = await axios.get(`${baseURL}/character/${characterId}`)    
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
        <CharacterContext.Provider value={apiData}>
            {children}
        </CharacterContext.Provider>
    );
};

export default CharacterProvider;