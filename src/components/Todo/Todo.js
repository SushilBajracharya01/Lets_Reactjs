import React from 'react';
import TodoItem from './TodoItem';
import UpdateBox from './UpdateBox';
import TodoInput from './TodoInput';


class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            todoList: [],
            changeTodo: false,
            updateTodo: '',
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
    displayUpdateBox = (id) => {
        this.setState(prevState => ({
            changeTodo: !prevState.changeTodo,
            updateId: id,
            updateTodo: this.state.todoList[id]
        }))
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
        const { todo, todoList, changeTodo, updateTodo, updateId } = this.state;

        return (
            <div className="container">
                <TodoInput todo={todo} handleTextChange={this.handleTextChange} handleSubmit={this.handleSubmit} />
                {
                    changeTodo
                    &&
                    <UpdateBox updateTodo={updateTodo} updateId={updateId} handleTextChange={this.handleTextChange} updateTodoFn={this.updateTodoFn} />
                }
                <ul>
                    {
                        todoList.map((todo, id) => {
                            return (
                               <TodoItem key={id} id={id} todo={todo} removeTodo={this.removeTodo} displayUpdateBox={this.displayUpdateBox} /> 
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Todo;