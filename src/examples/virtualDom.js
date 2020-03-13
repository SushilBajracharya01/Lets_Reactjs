import React from "react";

function VirtualDOM(props) {
    const {name} = props;
    return (
        <div>
            <h1>Hello</h1>
            <p>My name is <b>{name}</b></p>
        </div>
    )
}


export default VirtualDOM;

