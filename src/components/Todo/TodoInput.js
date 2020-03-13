import React from 'react';

const TodoInput = (props) => {
    const { todo, handleTextChange, handleSubmit } = props;
    return (
        <div>
            <input type="text" name="todo" value={todo} onChange={handleTextChange} />
            <button onClick={handleSubmit}>Add Todo</button>
        </div>
    )
}

export default TodoInput;
