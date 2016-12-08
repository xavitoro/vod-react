import React from 'react'
import { Link } from 'react-router'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>Keychn VOD </h1>
        <input type='text' placeholder='Search' />
        <Link to='/search' className='browse-all'>or Browse All</Link>
      </div>
    )
  }
})

export default Landing
