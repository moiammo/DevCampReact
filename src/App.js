import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component {

  constructor() {
    super()
    this.state = {
     a: '',
     b: '' ,
     c: ''
    }
    this.zzz = this.update.bind(this)
  }
  update(e) {
    this.setState({
      a: this.a.value,
      b: ReactDOM.findDOMNode(this.b).value,
      c: this.c.refs.input.value 
    })
  }

  render(){
    return ( 
      <div>
        <input
        ref={name => this.a = name}
        type="text"
        onChange={this.zzz}
        />
        {this.state.a}
        <hr />
        <input
        ref={name => this.b = name}
        type="text"
        onChange={this.zzz}
        />
        {this.state.b}
        <hr />
        <Input
        ref={name => this.c = name}
        type="text"
        zzz={this.zzz}
        />
        {this.state.c}
      </div>
    )
  }

}


class Input extends Component {
  render(){
    return <div><input ref="input" type="text" onChange={this.props.zzz} /></div>
  }
}



export default App;