import React, { Component } from 'react'
import Counter from './counter'

class Counters extends React.Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props
    return (
      <div>
        <button onClick={onReset} className='btn btn-primary'>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    )
  }
}

export default Counters
