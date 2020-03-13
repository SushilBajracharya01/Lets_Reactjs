import React from 'react';


const UpdateBox = (props) => {
    const { handleTextChange, updateTodo, updateId, updateTodoFn } = props;
    return (
        <div
            style={{
                border: '1px solid black',
                padding: '5px',
                textAlign: 'center'
            }}>
            <h5 style={{ margin: '3px' }}>
                Update Todo
            </h5>
            <input type="text" name="updateTodo" onChange={handleTextChange} value={updateTodo} /><button onClick={() => updateTodoFn(updateId, updateTodo)}>Update</button>

        </div>
    )
}

export default UpdateBox;