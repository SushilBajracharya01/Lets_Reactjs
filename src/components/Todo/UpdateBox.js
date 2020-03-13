import React from 'react';

const UpdateBox = (props) => {
    const { updateTodo, handleUpdateText, handleUpdateSubmit, handleUpdateCancel } = props;
    return (
        <div className="input-group mx-2">
            <input className="form-control" type="text" onChange={handleUpdateText} value={updateTodo} />
            <div className="input-group-append">
            <button className="btn btn-outline-success" onClick={handleUpdateSubmit}>Update</button>
            <button className="btn btn-outline-danger" onClick={handleUpdateCancel}>X</button>
            </div>
        </div>
    )
}

export default UpdateBox;