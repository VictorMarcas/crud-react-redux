import React from 'react';
import {connect} from "react-redux";
import Edited from "./Edited";
import {deleteTask, editedTask, updateTask} from "../redux/actionsCreator";

const Task = ({task, deleteTask, updateStatusTask, editedTask, edited}) => {
    return (
        <div className="flex items-center space-x-2 py-2">
            {
                edited === task.id
                    ? <Edited task={task} />
                    : <>
                        <div className="flex-grow text-sm leading-relaxed text-gray-500">{task.title}</div>
                        <div className="flex-shrink-0">
                            {
                                task.status === 'progress'
                                    ? <span className="leading-4 px-2 text-xs rounded-lg bg-yellow-500 text-white">In Progress</span>
                                    : <span className="leading-4 px-2 text-xs rounded-lg bg-green-500 text-white">Done</span>
                            }
                        </div>
                        <div className="flex-shrink-0 flex items-center justify-center">
                            <button type="button" onClick={() => editedTask(task.id)} disabled={task.status === 'done'} className="w-8 h-8 rounded-full flex items-center justify-center border-0 text-indigo-400 focus:outline-none disabled:text-gray-300 disabled:cursor-default">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </button>
                            <button type="button" onClick={() => updateStatusTask(task)} disabled={task.status === 'done'} className="w-8 h-8 rounded-full flex items-center justify-center border-0 text-green-400 focus:outline-none disabled:text-gray-300 disabled:cursor-default">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                            <button type="button" onClick={() => deleteTask(task.id)} className="w-8 h-8 rounded-full flex items-center justify-center border-0 text-red-300 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </>
            }

        </div>
    );
};

const mapStateToProps = state => ({
    edited: state.edited
})

const mapDispatchToProps = dispatch => ({
    deleteTask(id) {
        dispatch(deleteTask(id))
    },
    updateTask(task) {

    },
    editedTask(id) {
        dispatch(editedTask(id))
    },
    updateStatusTask(task) {
        const newTask = {...task, status: 'done'}
        dispatch(updateTask(newTask))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Task);
