import React from 'react'


class App extends React.Component {
  state = 0

  increment = () => {
    this.setState(prevState => prevState + 1)
  }

  decrement = () => {
    const counter = this.state
    this.setState(counter - 1)
  }

  render() {
    return (
      <div>
        <button onClick={this.decrement}> - </button>
        <div>{this.state}</div>
        <button onClick={this.increment}> + </button>
      </div>
    )
  }
}
