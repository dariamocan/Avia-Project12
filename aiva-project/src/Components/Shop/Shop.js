import React from 'react'
import Main from './Main'
import './shop.css'

export default function Shop() {
  return (
    <div className='shop'>
        <h1 className='title'>Avaible products</h1>
        <p className='description'>All products that work with our application</p>
        <Main />
    </div>
  )
}
