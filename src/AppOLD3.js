import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component {

  constructor() {
    super()
    this.state = {
     a: '',
     b: '' 
    }
    this.update = this.update.bind(this)
  }
  update(e) {
    this.setState({
      a: this.refs.a.value,
      b: this.refs.b.value
    })
  }

  render(){
    return ( 
      <div>
        <input
        ref='a'
        type="text"
        onChange={this.update}
        />
        {this.state.a}
           <input
        ref='b'
        type="text"
        onChange={this.update}
        />
        {this.state.b}
      </div>
    )
  }

}




export default App;