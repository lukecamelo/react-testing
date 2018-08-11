import React from 'react'
import './TestComponent.css'

class TestComponent extends React.Component {
  state = {
    numBoxes: 0,
    primeAnswer: '',
    primeNum: ''
  }

  changeHandler = e => {
    this.setState({ primeNum: e.target.value })
  }

  createBox = () => {
    this.setState({
      numBoxes: this.state.numBoxes + 1
    })
  }

  render() {
    const firstHalf = 'i am a lazy dog '
    const secondHalf = 'and i like to jump'
    const boxes = []

    for (let i = 0; i < this.state.numBoxes; i++) {
      boxes.push(<div className="box" key={i} />)
    }

    return (
      <div className="TestComponent">
        <h1>I'm a test component</h1>
        <h2>{firstHalf + secondHalf}</h2>

        <p onClick={this.createBox}>hey</p>
        <button onClick={() => this.createBox()}>Add box</button>

        {boxes}
      </div>
    )
  }
}

export default TestComponent
