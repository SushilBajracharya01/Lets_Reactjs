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

    handleUpdateCancel = () => {
        this.toggleUpdateBoxFn();
    }

    render() {
        const { id, todo, removeTodo } = this.props;
        const { displayUpdateBox, updateTodo } = this.state;
        return (
            <li className="list-group-item overflow-auto">
                <div className="m-1">{todo}</div>
                <div>
                    <button className="btn btn-outline-success m-1" onClick={() => removeTodo(id)} >Complete</button>
                    {
                        (displayUpdateBox) ? null :
                            <button className="btn btn-outline-warning m-1" onClick={this.toggleUpdateBoxFn} >Update</button>
                    }

                    {
                        displayUpdateBox &&
                        <UpdateBox updateTodo={updateTodo} handleUpdateText={this.handleUpdateText} handleUpdateSubmit={this.handleUpdateSubmit} handleUpdateCancel={this.handleUpdateCancel} />
                    }
                </div>
            </li>
        )
    }
}

export default TodoItem;