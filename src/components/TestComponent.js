import React from 'react'
import './TestComponent.css'

class TestComponent extends React.Component {
  state = {
    numBoxes: 0
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
      boxes.push(<div className='box' key={i}></div>)  
    }

    return (
      <div className="TestComponent">
        <h1>I'm a test component</h1>
        <h2>{firstHalf + secondHalf}</h2>
        <button onClick={() => this.createBox()}>Add box</button>
        {boxes}
      </div>
    )
  }
}

export default TestComponent
