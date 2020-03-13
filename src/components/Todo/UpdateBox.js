import React from 'react';

const UpdateBox = (props) => {
    const { updateTodo, handleUpdateText, handleUpdateSubmit } = props;
    return (
        <div className="mx-2">
            <input type="text" onChange={handleUpdateText} value={updateTodo} />
            <button className="btn btn-warning mx-2" onClick={handleUpdateSubmit}>Update</button>
        </div>
    )
}

export default UpdateBox;