import React from 'react'
import Main from './Main'
import Background from './Background'
import './home.scss'

export default function (props) {
  return (
    <div className='home'>
        <Background />
        <Main toggleCreateAccount = {props.toggleCreateAccount} />
    </div>
  )
}
