import axios from 'axios'
import {
    GET_ALL_CHARACTERS,
    GET_CHARACTER_DETAILS,
    GET_ALL_LOCATIONS,
    GET_LOCATION_DETAILS,
    GET_ALL_EPISODES,
    GET_EPISODE_DETAILS,
    CLEAR_STATES
} from '../constants'


const baseURL = 'https://rickandmortyapi.com/api'


export function getAllCharacters() {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${baseURL}/character`)
            dispatch({
                type: GET_ALL_CHARACTERS,
                payload: res.data.results
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function getCharacterDetails(characterId) {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${baseURL}/character/${characterId}`)
            dispatch({
                type: GET_CHARACTER_DETAILS,
                payload: res.data
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function getAllLocations() {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${baseURL}/location`)
            dispatch({
                type: GET_ALL_LOCATIONS,
                payload: res.data.results
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function getLocationDetails(locationId) {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${baseURL}/location/${locationId}`)
            dispatch({
                type: GET_LOCATION_DETAILS,
                payload: res.data
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function getAllEpisodes() {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${baseURL}/episode`)
            dispatch({
                type: GET_ALL_EPISODES,
                payload: res.data.results
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function getEpisodeDetails(episodeId) {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${baseURL}/episode/${episodeId}`)
            dispatch({
                type: GET_EPISODE_DETAILS,
                payload: res.data
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function clearStates() {
    return async function (dispatch) {
        try {
            dispatch({
                type: CLEAR_STATES                
            });
        } catch (error) {
            console.log(error)
        }
    }
}