import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: props.counterValue
    }

    this.decrement = this.decrement.bind(this)
    this.increment = this.increment.bind(this)
    this.reset = this.reset.bind(this)
  }

  decrement() {
    this.setState(state => ({
      counter: state.counter - 1
    }))  
  }

  increment() {
    this.setState(state => ({
      counter: state.counter + 1
    }))
  }

  reset() {
    this.setState(state => ({
      counter: 0
    }))

  }

render() {
  return(
    <div>
      <div> наш счетчик {this.state.counter}</div>
      <button onClick={this.increment}>pribavit</button>
      <button onClick={this.decrement}>otnyat</button>
      <button onClick={this.reset}>reset</button>
    </div>
    )

  }
}

export default Counter