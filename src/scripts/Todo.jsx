import React, {Component} from 'react';
import { connect } from "react-redux";
import Register from './components/Register';
import Task from "./components/Task";
import { getTasks } from "./redux/actionsCreator";

class Todo extends Component {
    componentDidMount() {
        this.props.getTasks()
    }
    render() {
        return (
            <div className="max-w-screen-xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-20 px-8">
                <Register />
                <div className="p-8">
                    <h3 className="font-bold text-gray-700 text-lg leading-tight mb-4">Tareas:</h3>
                    <div className="divide-y divide-gray-100">
                    {
                        this.props.tasks.map(task => (
                            <Task task={task} key={task.id}  />
                        ))
                    }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks
})

export default connect(mapStateToProps, { getTasks })(Todo);