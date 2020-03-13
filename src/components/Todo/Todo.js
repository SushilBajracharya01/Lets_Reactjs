import React from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

import './Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            todoList: [],
            updateId: null,
        }
    }

    handleTextChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        this.setState({
            todoList: [...this.state.todoList, this.state.todo],
            todo: ''
        })
    }
    removeTodo = (id) => {
        let newTodo = this.state.todoList;
        newTodo.splice(id, 1);
        this.setState({
            todoList: newTodo
        })
    }

    updateTodoFn = (id, todo) => {
        let newTodo = this.state.todoList;
        newTodo.splice(id, 1, todo);
        this.setState({
            todoList: newTodo,
            updateId: null,
            changeTodo: false
        })
    }
    render() {
        const { todo, todoList } = this.state;

        return (
            <div className="Todo">
                <div className="todoContainer">
                    <h3 className="text-center display-4">
                        Todo App
                    </h3>
                    <TodoInput
                        todo={todo}
                        handleTextChange={this.handleTextChange}
                        handleSubmit={this.handleSubmit}
                    />
                    <div>
                        <h4 className="text-center m-2">Todo List</h4>
                        <div className="TodoList">
                            {
                                todoList.length ? 
                                <ul className="list-group p-2 ">
                                    {
                                        todoList.map((todo, id) => {
                                            return (
                                                <TodoItem
                                                    key={id}
                                                    id={id}
                                                    todo={todo}
                                                    removeTodo={this.removeTodo}
                                                    updateTodoFn={this.updateTodoFn}
                                                />
                                            )
                                        })
                                    }
                                </ul>
                                :
                                <div className="completeMsg text-secondary text-center d-flex align-items-center justify-content-center "> All Tasks Completed! </div>
                            }
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Todo;