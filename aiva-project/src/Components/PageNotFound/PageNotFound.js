import React from 'react'
import { Link } from 'react-router-dom'

import './PageNotFound.css'
import logo from '../../images/error-404.png'

export default function PageNotFound() {
  return (
    <div className='error-404'>
      <h1>404 - Page Not Found </h1>
      <img src= {logo} />
      <h3>Sorry, this page isn't avaible</h3>
      <p>The link you followed may be broken. Navigate back or <Link className = 'link' to = {'/'}>go back to Home Page</Link></p>
    </div>
  )
}
