import React from 'react';

const TodoInput = (props) => {
    const { todo, handleTextChange, handleSubmit } = props;
    return (
        <div className="input-group mx-2">
            <input className="form-control" type="text" name="todo" value={todo} onChange={handleTextChange} placeholder="Learn React..." />
            <div className="input-group-append">
            <button className="btn btn-outline-primary mr-3 " onClick={handleSubmit}>Add Todo</button>
            </div>
        </div>
    )
}
export default TodoInput;
