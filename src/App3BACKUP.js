import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(){
        super()
        this.state = { items: [] }
    }
 

    componentWillMount(){
        fetch('https://www.swapi.co/api/people/?format=json')
        .then(response => response.json()
        .then(({ results: items}) => this.setState({items})))
    }   
    
    filter(e){
        this.setState({ filter: e.target.value })
    }
    
    render() {
        let items = this.state.items
        if (this.state.filter){
            items = items.filter(item =>
            item.name.toLowerCase()
                .includes(this.state.filter.toLowerCase()))
        }
        return(
            <div>
                <input type = "text"
                    onChange={this.filter.bind(this)} />
                {items.map(item => 
                <Person key={item.name} person={item} /> )}
            </div>
        )
    }

}

class Person extends Component {
    render(){
        return (
            <h4 key={this.props.person.name}> {this.props.person.name}</h4>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

export default App