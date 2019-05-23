import React, {Component} from 'react';

export default class Header extends Component {
    state = {
        task: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    click = () => {
        const task = this.state.task;
        if (task && task.trim() !== '') {
            this
                .props
                .addTask(task);
            this.clearFields();
        }
    }

    clearFields = () => {
        this.refs.inputTask.value = '';
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.click();
        }
    }

    render() {
        return (
            <header>
                <input
                    className="task-input"
                    onChange={this.onChange}
                    onKeyDown={this._handleKeyDown}
                    ref="inputTask"
                    type="text"
                    placeholder="Enter a activity"
                    name="task"/>
                <button className="task-add" onClick={this.click}>
                    <i className="fa fa-plus"></i>
                </button>
            </header>
        );
    }
}