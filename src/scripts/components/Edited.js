import React, {Component, createRef} from 'react';
import {connect} from "react-redux";
import {editedTask, updateTask} from "../redux/actionsCreator";

class Edited extends Component {
    constructor(props) {
        super(props);

        this.updatedRef = createRef();

    }
    handleSubmit() {
        const task = {
            ...this.props.task,
            title: this.updatedRef.current.value
        }
        this.props.dispatch(updateTask(task))
    }
    handleCancelEdited () {
        this.props.dispatch(editedTask(0))
    }

    handleKeyDown(e) {
        switch (e.key) {
            case 'Enter':
                this.handleSubmit()
                break
            case 'Escape':
                this.handleCancelEdited()
                break
            default:
                break
        }
    }
    render() {
        return (
            <div className="flex-grow items-center flex bg-gray-100 rounded">
                <input type="text" ref={this.updatedRef} defaultValue={this.props.task.title} autoFocus onKeyDown={(e) => this.handleKeyDown(e)} className="text-sm leading-relaxed text-gray-500 rounded-l bg-gray-100 border-0 flex-grow focus:ring-0" />
            </div>
        );
    }
}

export default connect()(Edited);