import './CharacterDetails.scss'
import { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CharacterContext } from '../../context/apiContext';
import CharacterProvider from '../../context/CharacterProvider';


function CharacterDetails() {

    const character = useContext(CharacterContext);

    return (
        <div className="container">
            <div className="characterDetails">
                {
                    character && (
                        <div>
                            <img src={character.image} alt='character' />
                            <div className="characterInfo">
                                <p>Name: <b>{character.name}</b></p>
                                <p>Tipo: {character.type == null ? <b>{character.type}</b> : "..."}</p>
                                <p>Estado: <b>{character.status}</b></p>
                                <p>Género: <b>{character.gender}</b></p>
                                <p>Especie: <b>{character.species}</b></p>
                                {
                                    character.origin.name != 'unknown'
                                        ? <Link to={`/ubicaciones/${character.origin.url.split('/')[5]}`}>
                                            <a>Planeta: <b>{character.origin.name}</b></a>
                                        </Link>
                                        : <a>Planeta: <b>Desconocido</b></a>
                                }
                            </div>
                        </div>
                    )
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