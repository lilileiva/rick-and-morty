import {
    GET_ALL_CHARACTERS,
    GET_CHARACTER_DETAILS,
    GET_ALL_LOCATIONS,
    GET_LOCATION_DETAILS,
    GET_ALL_EPISODES,
    GET_EPISODE_DETAILS,
    CLEAR_STATES
} from '../constants'

const initialState = {
    characters: [],
    character: {},
    locations: [],
    location: {},
    episodes: [],
    episode: {}
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_CHARACTERS: {
            return {
                ...state,
                characters: action.payload
            }
        }
        case GET_CHARACTER_DETAILS: {
            return {
                ...state,
                character: action.payload
            }
        }
        case GET_ALL_LOCATIONS: {
            return {
                ...state,
                locations: action.payload
            }
        }
        case GET_LOCATION_DETAILS: {
            return {
                ...state,
                location: action.payload
            }
        }
        case GET_ALL_EPISODES: {
            return {
                ...state,
                episodes: action.payload
            }
        }
        case GET_EPISODE_DETAILS: {
            return {
                ...state,
                episode: action.payload
            }
        }
        case CLEAR_STATES: {
            return {
                ...state,
                characters: [],
                character: {},
                locations: [],
                location: {},
                episodes: [],
                episode: {}
            }
        }
        default:
            return state
    }
}