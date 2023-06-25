import {
    FETCH_TODOS_STARTED,
    FETCH_TODOS_SUCCEEDED,
    FETCH_TODOS_FAILED
} from '../constants'

const initialState = {
    status: 'uninitialized',
    todos: [],
    error: null
}

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TODOS_STARTED: {
            return {
                ...state,
                status: 'loading'
            }
        }
        case FETCH_TODOS_SUCCEEDED: {
            return {
                ...state,
                status: 'succeeded',
                todos: action.todos
            }
        }
        case FETCH_TODOS_FAILED: {
            return {
                ...state,
                status: 'failed',
                todos: [],
                error: action.error
            }
        }
        default:
            return state
    }
}