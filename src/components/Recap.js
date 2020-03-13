import React from 'react';

class Recap extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            text: '',
            arr: ['hello']
        }
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    componentDidMount = () => {
        console.log("ComponentDidMount");
    }

    componentDidUpdate = () => {
        console.log("component Did Update");
    }


    componentWillUnmount = () => {
        console.log("ComponentWillUnmount");
    }

    handleSubmit = () => {
        console.log('Submit Called');
        this.setState({
            arr: [...this.state.arr, this.state.text],
            text: ''
        })

        console.log(this.state);
        
    }

    render() {
        const { text, arr } = this.state;
        const { name } = this.props;
        return (
            <div>
                
                {console.log("render")}
                <div className="display-4">{name}</div>
                <div>{text}</div> 
                <input type="text" onChange ={this.handleChange} value={text} />
                <button onClick={this.handleSubmit}>Submit</button>

                <ul>
                    {
                        arr.map((item, i) => (
                            
                            <li key={i} className="bg-dark text-light display-1">{console.log(i)}{item}</li>
                        ))
                    }
                </ul>
                


            </div>
        )
    }
}

export default Recap;