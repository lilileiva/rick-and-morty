import { createContext } from 'react';

const baseURL = 'https://rickandmortyapi.com/api'

const CharactersContext = createContext();
const CharacterContext = createContext();

const LocationsContext = createContext();
const LocationContext = createContext();

const EpisodesContext = createContext();
const EpisodeContext = createContext();

export {
    baseURL,
    CharactersContext,
    CharacterContext,
    LocationsContext,
    LocationContext,
    EpisodesContext,
    EpisodeContext
};