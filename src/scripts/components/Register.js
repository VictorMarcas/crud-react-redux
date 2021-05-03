import React, {Component, createRef} from 'react';
import { connect } from "react-redux";
import {addTask} from "../redux/actionsCreator";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true
        }
        this.taskRef = createRef();
        this.createdTask = this.createdTask.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
    }

    createdTask (e) {
        const task = {
            status: "progress",
            title: this.taskRef.current.value
        }
        this.props.dispatch(addTask(task))
        e.preventDefault();
        e.target.reset();
    }

    isFormValid (e) {
        if(e.target.value === '' || e.target.value === undefined) {
            this.setState({disabled: true})
        } else {
            this.setState({disabled: false})
        }
    }

    render() {
        return (
            <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="font-bold text-gray-700 text-lg leading-tight mb-4">Registrar Tarea:</h3>
                <form onSubmit={ this.createdTask }>
                    <div className="space-y-6">
                        <label htmlFor="task">
                            <input type="text" name="task" placeholder="Agrega una tarea" ref={this.taskRef} onChange={this.isFormValid} id="task" className="rounded text-gray-500 text-sm border-0 w-full font-display focus:ring-0 focus:outline-none placeholder-gray-300"/>
                        </label>
                        <button
                            type="submit"
                            disabled={this.state.disabled}
                            className="bg-green-500 text-white rounded w-full py-4 leading-3 px-6 w-full text-center focus:outline-none disabled:bg-gray-300">
                            Registrar Tarea
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect()(Register);
