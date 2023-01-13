import React,{useEffect, useState} from 'react'
import logo from '../../images/logo.jpg'
import {Link} from "react-router-dom"
import './navbar.css'
import test from '../../images/test.jpg'
import classNames from 'classnames'
import httpClient from '../../httpClient'
export default function Navbar(props) {

  const [showProfile,setShowProfile] = useState(false)

  useEffect(() => async () => {
    try {
      const resp = await httpClient.post('/verify-login') 
      console.log(resp)
      if(resp.data === 200)
        props.toggleLogin()
    }
    catch (e) {
      if(e.response.status === 500)
        alert('Server error')
    }
  },[])

  function toggleProfile () {
    setShowProfile((prevState) => !prevState)
  }

  const handleSignOut = async () => {
    try {
      const resp = await httpClient.post('/logout')
      window.location.href = '/'
    }
    catch (e) {
      console.log(e)
    }
  }
  return (
    <nav className='navbar'>
        <a className='logo'><img src = {logo}/><p className='title'>ILLUMZ</p></a>
        <ul className='start'>
          <li><Link to = {'/'} className = 'text-link'>Home</Link></li>
          <li><Link to = {'/usage'} className = 'text-link'>Usage</Link></li>
          <li><Link to = {'/community'} className = 'text-link'>Community</Link></li>   
          <li><Link to = {'/shop'} className = 'text-link'>Shop</Link></li>
          
        </ul>
        {!props.login && <ul className='end'>         
          <li><p className='text-link' onClick={props.toggleSignInOn}>Sign in</p></li>
          <hr></hr>
          <li onClick={props.toggleCreateAccount}><p className = 'text-link'>Create account</p></li>
        </ul>}
        {props.login && <div className='profile'>
          <img src = {test} onClick = {toggleProfile} className = {classNames( {'profile--active':showProfile})}></img>
            {showProfile && <div className='profile--design'></div>}
          {showProfile && <ul className='profile--list'>
            <li><Link to = {'/account'} className='profile--text' onClick={toggleProfile}><i className="fa-regular fa-circle-user"></i>Profile</Link></li>
            {/* <li><p onClick= {() => {
               props.toggleLogin()
            }} className='profile--text'><i className="fa-solid fa-repeat"></i>Change account</p></li> */}
            <li><p className='profile--text'><i className="fa-regular fa-lightbulb"></i>Add devices</p></li>
            <li onClick={() => {
              props.toggleReportProblem()
              toggleProfile()
            }}><p className='profile--text'><i className="fa-solid fa-triangle-exclamation"></i>Report a problem</p></li>

            <hr></hr>
            <li onClick = {() => {
               handleSignOut()
               toggleProfile()
               props.toggleLoginOff() 
            }
            } 
            >
            <p className='profile--text' >Sign out</p></li>
          </ul>}
        </div>
        } 
    </nav>
  )
}
