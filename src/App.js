import React from 'react';
import './App.css';
// import FunctionalComp from './components/FunctionalComp';
// import ClassCom from './components/ClassCom';
// import Suri from './Suri';
// import Recap from './components/Recap';
import Todo from './components/Todo/Todo';

class App extends React.Component {
  state= {
    name: 'Surendra',
    remove: true
  }
  render() {
    return (
      <div className="App">
        {/* <button onClick={()=>{this.setState({remove: false})}}>UnMount Recap</button>

        {this.state.remove && <Recap name="ram"/>} */}
        <Todo />
        {/* <Suri name={this.state.name} />
        <input type="text" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} /> */}
        {/* <FunctionalComp name="Sushil" />
      <ClassCom name="Sushil"/> */}
      </div>
    );
  }
}



export default App;
