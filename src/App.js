import React, {Component} from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';

// export const TodoContext = React.createContext({});

export default class App extends Component {
    state = {
        dataset: {
            uncompleted: [],
            completed: []
        }
    }

    componentDidMount() {
        const dataset = (localStorage.getItem('todoListData'))
            ? JSON.parse(localStorage.getItem('todoListData'))
            : {
                uncompleted: [],
                completed: []
            };

        this.setState({dataset});
    }

    addTask = (task) => {
        this.setState(prev => ({
            dataset: {
                ...prev.dataset,
                uncompleted: this
                    .state
                    .dataset
                    .uncompleted
                    .concat(task)
            }
        }))
        this.saveStorage();
    }
    saveStorage = () => {
        localStorage.setItem('todoListData', JSON.stringify(this.state.dataset));
    }

    deleteTask = (task) => {
        const dataset = this.state.dataset;
        dataset[task.list].splice(task.index, 1);
        this.setState({dataset});
        this.saveStorage();
    }

    checkTask = (task) => {
        const dataset = this.state.dataset;

        dataset[task.list].splice(task.index, 1);
        if ('uncompleted' === task.list) {
            dataset.completed.push(task.label);
        } else {
            dataset.uncompleted.push(task.label);
        }

        this.setState({dataset});
        this.saveStorage();
    }

    render() {
        return (
            <div className="App main-container">
                <Header addTask={this.addTask}/>
                <div className="wrap-tasks">
                    <TaskList
                        tasks={this.state.dataset.uncompleted}
                        mode={"uncompleted"}
                        checkTask={this.checkTask}
                        deleteTask={this.deleteTask}/>
                    <TaskList
                        tasks={this.state.dataset.completed}
                        mode={"completed"}
                        checkTask={this.checkTask}
                        deleteTask={this.deleteTask}/>
                </div>
            </div>
        );
    }
}
