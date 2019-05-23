import React, {Component} from 'react';

export default class Task extends Component {
    render() {
        return (
            <div className="task">
                <div className="task-description">
                    {this.props.task.label}
                </div>
                <div className="task-btns">
                    <div>
                        <button
                            className="task-btn remove"
                            onClick={() => this.props.deleteTask(this.props.task)}>
                            <i className="fa fa-trash"></i>
                        </button>
                        <button
                            className="task-btn check"
                            onClick={() => this.props.checkTask(this.props.task)}>
                            <i className="fa fa-check"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}