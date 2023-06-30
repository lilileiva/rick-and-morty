import './CharacterDetails.scss'
import { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CharacterContext } from '../../context/apiContext';
import CharacterProvider from '../../context/CharacterProvider';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';


function CharacterDetails() {

    const character = useContext(CharacterContext);
    const characterData = character?.apiData

    return (
        <div className="container">
            <div className="characterDetails">
                {
                    character?.fetchStatus === "success" && (
                        <div>
                            <img src={characterData.image} alt='character' />
                            <div className="characterInfo">
                                <p>Name: <b>{characterData.name}</b></p>
                                <p>Tipo: {characterData.type == null ? <b>{characterData.type}</b> : "..."}</p>
                                <p>Estado: <b>{characterData.status}</b></p>
                                <p>Género: <b>{characterData.gender}</b></p>
                                <p>Especie: <b>{characterData.species}</b></p>
                                {
                                    characterData.origin.name != 'unknown'
                                        ? <Link to={`/ubicaciones/${characterData.origin.url.split('/')[5]}`}>
                                            <a>Planeta: <b>{characterData.origin.name}</b></a>
                                        </Link>
                                        : <a>Planeta: <b>Desconocido</b></a>
                                }
                            </div>
                        </div>
                    )
                }
                {
                    character?.fetchStatus === "loading" && <Loader />
                }
                {
                    character?.fetchStatus === "error" && <Error />
                }
            </div>
        </div>
    );
}

function CharacterDetailsWrapper() {
    const { characterId } = useParams();

    return (
        <CharacterProvider characterId={characterId}>
            <CharacterDetails />
        </CharacterProvider>
    );
}

export default CharacterDetailsWrapper;