import React, { Component } from 'react'
import TestComponent from './components/TestComponent'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <TestComponent/>
      </div>
    )
  }
}

export default App
 