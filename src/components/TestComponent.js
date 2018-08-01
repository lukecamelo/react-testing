import React from 'react'

class TestComponent extends React.Component {
  render() {

    const firstHalf = 'i am a lazy dog '
    const secondHalf = 'and i like to jump'

    return (
      <div className="TestComponent">
        <h1>I'm a test component</h1>
        <h2>{firstHalf + secondHalf}</h2>
      </div>
    )
  }
}

export default TestComponent