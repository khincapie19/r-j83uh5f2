import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }

  }
  // updateCount(event) {
  //   const eventKey = event.keyCode
  //   //const counter = eventKey === 13 || eventKey > 33 ? this.state.count + 1 : this.state.count > 0 ? this.state.count - 1 : this.state.count === 0
  //   const counter = eventKey !== 8 ? this.state.count + 1 : this.state.count > 0 ? this.state.count - 1 : this.state.count === 0
  //   console.log(eventKey)
  //
  //   this.setState({
  //     count: counter
  //   });
  // }

  updateCount(event){
    const count = event.target.value.length;
    this.setState({
      count: count
    })
  }

  render() {
    return (
      <div className="container">
        <textarea onChange={this.updateCount.bind(this)} rows="3"></textarea>
        <div className="counter">{this.state.count}</div>
      </div>
    );
  }
}

export default App;
