import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'

class App extends Component {

  constructor() {
    super()
    this.state = {
      currentEvent: '...'
    }
    this.update = this.update.bind(this)
  }

  update(e){
    this.setState({
      currentEvent: e.type 
    })
  }

  render(){
    return ( 
      <div>
        <textarea
        onKeyPress={this.update}
        onCopy={this.update}
        onPaste={this.update}
        onCut={this.update}
        onDoubleClick={this.update}
        onFocus={this.update}
        onBlur={this.update}
        cols="30"
        rows="10"
        />
        <h1> {this.state.currentEvent} </h1>
      </div>
    )
  }

}

const Title = (props) => <h1> Title:{props.text} </h1>


export default App;