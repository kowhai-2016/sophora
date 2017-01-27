import React from 'react'
import { Link } from 'react-router'

const Header = () => (
  <div className='header container'>
    <div className='row'>
      <h1><Link to={'/'}>Sophora</Link></h1>
    </div>
  </div>
)

export default Header
