import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';

const HOC = (InnerComponent) => class extends Component {
    constructor(){
        super()
        this.state = {
            count:0
        }
        this.update = this.update.bind(this)
    }

    update(){
        this.setState({
            count: this.state.count +1
        })
    }

    componentWillMount(){
        console.log('HOC willMount')
    }

    render(){
        return(
            <InnerComponent 
            {...this.props}
            {...this.state}
            update={this.update.bind(this)}
            />
        )
    }
}


class App extends Component {
    render(){
        return (
            <div>
                <Button>Button</Button>
                <hr />
                <LabelHOC>label</LabelHOC>
            </div>
        )
    }
}
const Button = HOC((props) => 
    <button onClick={props.update}> {props.children} - {props.count}</button>)

class Label extends Component{
    render() {
        return (
            <label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>
        )
    }
    update(){
        this.setState({
            count: this.state.count +1
        })
    }

    componentWillMount(){
        console.log('label will mount')
    }
}
const LabelHOC = HOC(Label)
export default App