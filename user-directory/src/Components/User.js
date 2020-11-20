import React, { Component } from 'react'

import './User.css'

class User extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className='user'>
        <div className='number'>
          <h1>{this.props.currentUser.id}/25</h1>
        </div>
        <div className='info'>
          <div className='main-info'>
            <h1>{this.props.currentUser.name.first} {this.props.currentUser.name.last }</h1>
            <p><b>From:</b> {this.props.currentUser.city}, {this.props.currentUser.country}</p>
            <p><b>Job Title:</b> {this.props.currentUser.title}</p>
            <p><b>Employer:</b> {this.props.currentUser.employer}</p>
          </div>
          <div className='favorite-movies'>
            <p><b>Favorite Movies:</b></p>
            <ol>
              <li>{this.props.currentUser.favoriteMovies[0]}</li>
              <li>{this.props.currentUser.favoriteMovies[1]}</li>
              <li>{this.props.currentUser.favoriteMovies[2]}</li>
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default User