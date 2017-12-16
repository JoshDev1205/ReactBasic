import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Importing Components
import ProductForm from './components/ProductForm'

const arrayProducts = [
  { Name: 'Computadora', Price: 1200 },
  { Name: 'Laptop', Price: 3000 },
  { Name: 'Smatphone', Price: 850 },
]
class App extends Component {
    constructor(props) {
      super(props)

      this.state = {
        name:''
      }

      this.onChangeValue = this.onChangeValue.bind(this)
    }

    onChangeValue(ev){
      let nombre = ev.target.value

      this.setState({
        name: nombre
      })
    }
  render() {
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ProductForm
          products = { arrayProducts }
         />
         <br/>
         <input type="text" placeholder="Ingrese el Nombe" onChange={this.onChangeValue}/>
         <br/>
         <br/>
         <span>{this.state.name}</span>
      </div>
    );
  }
}

export default App;
