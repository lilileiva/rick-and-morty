import { useState, useEffect } from 'react';
import { baseURL, CharacterContext} from './apiContext';
import axios from 'axios'


const CharacterProvider = ({ children, characterId }) => {

    const [apiData, setApiData] = useState(null);
    const [fetchStatus, setFetchStatus] = useState("loading");
    
    const fetchData = async () => {
        try {
            const response = await axios.get(`${baseURL}/character/${characterId}`)
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
        <CharacterContext.Provider value={{apiData, fetchStatus}}>
            {children}
        </CharacterContext.Provider>
    );
};

export default CharacterProvider;