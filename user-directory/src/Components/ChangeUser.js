import React, { Component } from 'react'
import data from '../data.js'
import './ChangeUser.css'
import User from './User'

class ChangeUser extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: 0,
      previousButton: '< Previous',
      nextButton: 'Next >',
    }

    this.handleIncrementUser = this.handleIncrementUser.bind(this)
    this.handleDecreaseUser = this.handleDecreaseUser.bind(this)
  }

  componentDidMount() {
    this.setState({
      previousButton: 'Beginning of List',
      nextButton: 'Next >'
    })
  }

  handleIncrementUser() {
    if (this.state.currentUser < data.length - 1) {
      this.setState({
        currentUser: this.state.currentUser + 1,
        previousButton: '< Previous',
      })
    } else {
      this.setState({
        nextButton: 'End of List'
      })
    }
  }

  handleDecreaseUser() {
    if (this.state.currentUser !== 0) {
      this.setState({
        currentUser: this.state.currentUser - 1,
        nextButton: 'Next >'
      })
    } else {
      this.setState({
        previousButton: 'Beginning of List'
      })
    }
  }

  render() {
    return (
      <div>
        <div className='change-user-container'>
          <User currentUser={data[this.state.currentUser]} />
        </div>
        <div className='buttons-box'>
          <button className='previous'
            onClick={this.handleDecreaseUser}
          >{this.state.previousButton}</button>
          <div className='blue-buttons-box'>
            <button className='blue-buttons'>Edit</button>
            <button className='blue-buttons'>Delete</button>
            <button className='blue-buttons'>New</button>
          </div>
          <button className='next'
            onClick={this.handleIncrementUser}
          >{this.state.nextButton}</button>
        </div>

      </div>
    )
  }
}

export default ChangeUser