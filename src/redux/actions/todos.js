import axios from 'axios'
import {
    FETCH_TODOS_STARTED,
    FETCH_TODOS_SUCCEEDED,
    FETCH_TODOS_FAILED
} from '../constants'

export const fetchTodosStarted = () => ({
    type: FETCH_TODOS_STARTED
})

export const fetchTodosSucceeded = todos => ({
    type: FETCH_TODOS_SUCCEEDED,
    todos
})

export const fetchTodosFailed = error => ({
    type: FETCH_TODOS_FAILED,
    error
})

export const fetchTodos = () => {
    return async dispatch => {
        dispatch(fetchTodosStarted())
        try {
            const res = await axios.get('/todos')
            dispatch(fetchTodosSucceeded(res.data))
        } catch (err) {
            dispatch(fetchTodosFailed(err))
        }
    }
}