import {ADD_TASK, DELETE_TASK, EDITED_TASK, GET_TASKS, UPDATE_TASK} from './actions';
import Services from '../services';


const getTasks = () => dispatch => {
    Services.get('/tasks')
        .then(response => {
            return dispatch ({
                type: GET_TASKS,
                tasks: response.data
            })
        })
}

const addTask = payload => dispatch => {
    Services.post('/tasks', payload)
        .then(response => {
            return dispatch ({
                type: ADD_TASK,
                task: response.data
            })
        })
}

const deleteTask = payload => dispatch => {
    Services.delete(`/tasks/${payload}`)
        .then(response => {
            if (response.status === 200) {
                return dispatch({
                    type: DELETE_TASK,
                    id: payload
                })
            }
        })
}

const updateTask = payload => dispatch => {
    Services.put(`/tasks/${payload.id}`, payload)
        .then(response => {
            return dispatch({
                type: UPDATE_TASK,
                task: response.data
            })
        })
}

const editedTask = payload => dispatch => {
    return dispatch({
        type: EDITED_TASK,
        id: payload
    })
}


export { getTasks, addTask, deleteTask, updateTask, editedTask }