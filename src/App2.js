import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(){
        super()
        this.state = { increasing: false }
    }
    update(e) {
       ReactDOM.render(
          <App val={this.props.val+1} />, document.getElementById('root') 
       )
    }

    
    componentWillReceiveProps(nextProps){
        // console.log(`this is nextProps =>  ${nextProps.val}`);
        // console.log(`this is props =>  ${this.props.val}`);
        this.setState({increasing: nextProps.val > this.props.val})
    }

    render() {
        console.log(this.state.increasing)
        return(
            <div>
             <button onClick={this.update.bind(this)}>
             {this.props.val}
            </button>
            </div>
        )
    }

    shouldComponentUpdate(nextProps,nextState){
        return nextProps.val %5 === 0;
    }
    componentDidUpdate(prevProps, prevState){
        console.log(`prevProps: ${prevProps.val}`)
    }
}

App.defaultProps = {val: 0 }
export default App