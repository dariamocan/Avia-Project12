import React, { useState } from 'react'
import './ReportProblem.css'

export default function ReportProblem(props) {

  const [textareaData , setTextareaData ] = useState('')
  
  function handleChange (event) {
    const {value} = event.target
    setTextareaData(value)
  }
  function handleSubmit (event) {
    event.preventDefault()
    
  }
  return (
    <div className='report--container'>
        <div className='screen--black'
              
          ></div>
        <form className='report--problem' onSubmit={handleSubmit}>
         
          <h3 className='report--title'>Report a Problem</h3>
          <button type = 'button' className='close' onClick={props.toggleReportProblem}>✖</button>
          <textarea 
            spellCheck = "false"
            placeholder='Briefly explain what happend.'
            onChange={handleChange}
            name = 'problem'
            value = {textareaData}
          />
          <button className='valid--value sign--submit'>Send Report</button>
        </form>
    </div>
  )
}
