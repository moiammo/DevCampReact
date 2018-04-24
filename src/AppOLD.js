import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'

class App extends Component {
  render() {
    return (
      <Title />
    )
  }
}

const Title = (props) => <h1> Title:{props.text} </h1>

Title.propTypes = {
  text(props, propName, component){
    if (!(propName in props)){
      return new Error (`missing ${propName}`) 
    }
  }
}

export default App;