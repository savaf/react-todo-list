import React, {Component} from 'react';
import Task from './Task';

export default class TaskList extends Component {
    render() {
        return (
            <div className="tasks" id={this.props.mode}>
                {this
                    .props
                    .tasks
                    .map((label, index) => {
                        return <Task
                            key={Math
                            .random()
                            .toString('6')}
                            task={{
                            list: this.props.mode,
                            index,
                            label
                        }}
                            deleteTask={this.props.deleteTask}
                            checkTask={this.props.checkTask}/>;
                    })}
            </div>
        );
    }
}