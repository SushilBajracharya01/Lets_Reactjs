import React from 'react';

class ClassCom extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={
            text: "Sushil"
        }
        this.handleChange =  this.handleChange.bind(this);
    }

    handleChange (event) {
        this.setState({
            text: event.target.value
        })
    }
    render() {
        return (
            <div> 
                <div>
                    {this.state.text}
                </div>
                <input type="text" onChange={this.handleChange} />
            </div>
        )
    }
}


export default ClassCom;