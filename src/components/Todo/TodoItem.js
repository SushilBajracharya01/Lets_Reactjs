import React from 'react';

const TodoItem = (props) => {
    const { id, todo, removeTodo, displayUpdateBox } = props;
    return (
        <li>
            {todo}
            <button onClick={() => removeTodo(id)} >Remove</button>
            <button onClick={() => displayUpdateBox(id)} >Update</button>
        </li>
    )
}

export default TodoItem;