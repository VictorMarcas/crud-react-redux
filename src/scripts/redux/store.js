import {applyMiddleware, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {ADD_TASK, DELETE_TASK, UPDATE_TASK, EDITED_TASK, GET_TASKS} from "./actions";

const initialStore = {
    tasks: [],
    edited: 0
}

const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case GET_TASKS:
            return {...state, tasks: action.tasks}
        case UPDATE_TASK:
            const updateTasks = state.tasks.map(task => task.id === action.task.id ? {...task, ...action.task} : task);
            return {...state, edited: 0, tasks: updateTasks}
        case EDITED_TASK:
            return {...state, edited: action.id}
        case DELETE_TASK:
            const tasks = state.tasks.filter(task => task.id !== action.id)
            return {...state, tasks: tasks}
        case ADD_TASK:
            return {...state, tasks: [...state.tasks, action.task]}
        default:
            return state
    }
}

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
