import React, { useState } from 'react'
import Current from './Charts/Current'
import classNames from 'classnames'
import './usage.css'
export default function Main() {

  const [currentActive,setCurrentActive] = useState(true)
  const [previousActive,setPreviousActive] = useState(false)
  const [futureActive,setFutureActive] = useState(false)

  const toggleCurrent = () => {
    setCurrentActive(true)
    setPreviousActive(false)
    setFutureActive(false)
  }
  const toggleFuture = () => {
    setCurrentActive(false)
    setPreviousActive(false)
    setFutureActive(true)
  }
  const togglePrevious = () => {
    setCurrentActive(false)
    setPreviousActive(true)
    setFutureActive(false)
  }
  return (
    <main className='usage--main'>
      <div className='usage--container'>
        <ul className='select--chart'>
          <li onClick = {toggleFuture} className={classNames({'active':futureActive})}>Future</li>
          <li onClick = {toggleCurrent} className={classNames({'active':currentActive})}>Current</li>
          <li onClick = {togglePrevious} className={classNames({'active':previousActive})}>Historic</li>
        </ul>
        <Current />
      </div>
    </main>
  )
}
