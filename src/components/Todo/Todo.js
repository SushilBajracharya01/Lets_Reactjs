import React from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';


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
            <div className="container">
                <TodoInput
                    todo={todo}
                    handleTextChange={this.handleTextChange}
                    handleSubmit={this.handleSubmit}
                />
                <div>
                    <h4>Todo List</h4>
                    <ul>
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
                </div>

            </div>
        )
    }
}

export default Todo;