import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor() {
        super()
        this.state = { items: ["x", "y"] }
        // this.text = ''
        this.add = this.add.bind(this)
        this.updateText = this.updateText.bind(this)
    }

    add(e){
        let items = this.state.items
        this.setState({
            items: [...items, this.state.text]
        })
        console.log(this.state.items)
    } 

    updateText(e){
        // this.state.text = e.target.value;   
        // console.log(e.target.value)
        this.setState({text: e.target.value})
        console.log(this.state.text)
      }
    
   
    render() { 
        let items = this.state.items
        return(
            <div>
                {/* <input type = "text" id="textInput"  />  */}
                <button onClick={this.add}>add</button>
                <input id="textInput" type="text" onChange={this.updateText} />
                <br/>
                {/* <h4>{this.state.items}</h4> */}

                {items.map((item, index) => <Job key={index} text={item}/>)}

            </div>
        )
    }

}

const Job = (props) => <h4>{props.text}</h4>

// class Job extends Component{
//     constructor(){
//         super()
//     }
//     render(){
//         return (
//             <h4>this.props.text</h4>
//         )
//     }
// }


// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )

export default App