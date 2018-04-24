import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';

const HDC = (InnerComponent) => class extends Component {
    constructor(){
        super()
        this.state = {
            count:0
        }
    }

    render(){
        return(
            <InnerComponent />
        )
    }
}

// export default App