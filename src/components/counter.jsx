import React, { Component } from 'react'

class Counter extends React.Component {
  getBadgeClasses = () => {
    let classes = 'badge mx-3 my-3 bg-'
    return (classes += this.props.counter.value === 0 ? 'warning' : 'primary')
  }
  formatCount = () => {
    return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value
  }
  render() {
    return (
      <div className='row'>
        <div className='col-2'>
          {' '}
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className='col'>
          <button
            className='btn btn-secondary my-3 mx-1 btn-sm'
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            +
          </button>
          <button
            className='btn btn-secondary my-3 btn-sm'
            onClick={() => this.props.onDecrement(this.props.counter)}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className='btn btn-danger btn-sm m-2'
          >
            Delete
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
