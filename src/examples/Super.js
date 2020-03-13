import React, { Component } from 'react';

class Super extends Component {
    constructor(props) {
        super(props); // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        this.state ={
            name: "Super"
        };
    }
    render() {
        return (
            <div>
                {console.log(this.props)}
                hi {this.state.name}
            </div>
        )
    }
}

export default Super;