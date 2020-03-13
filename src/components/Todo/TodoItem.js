import React from 'react';
import UpdateBox from './UpdateBox';


class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayUpdateBox: false,
            updateTodo: ''
        }
    }

    handleUpdateText = (e) => {
        this.setState({
            updateTodo: e.target.value,
        })
    }
    toggleUpdateBoxFn = () => {
        this.setState(prevState => ({
            displayUpdateBox: !prevState.displayUpdateBox,
            updateTodo: this.props.todo,
        }))
    }

    handleUpdateSubmit = () => {
        this.props.updateTodoFn(this.props.id, this.state.updateTodo);
        this.toggleUpdateBoxFn();
    }

    render() {
        const { id, todo, removeTodo } = this.props;
        const { displayUpdateBox, updateTodo } = this.state;
        return (
            <li>
                {todo}
                <button className="btn btn-danger mx-2" onClick={() => removeTodo(id)} >Remove</button>
                {
                    (displayUpdateBox)? null:
                    <button className="btn btn-warning mx-2" onClick={this.toggleUpdateBoxFn} >Update</button>
                }

                {
                    displayUpdateBox &&
                    <UpdateBox updateTodo={updateTodo} handleUpdateText={this.handleUpdateText} handleUpdateSubmit={this.handleUpdateSubmit} />
                }
            </li>
        )
    }
}

export default TodoItem;