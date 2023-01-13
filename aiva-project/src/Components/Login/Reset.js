import React,{useState} from 'react'
import classNames from 'classnames'

import './reset.css'
export default function Reset(props) {

    const [inputData,setInputData] = useState()
    const [activateButton,setActivateButton] =useState()
    const [error,setError] = useState('')

    function handleChange (event) {
        const {value} = event.target
        setInputData(value)

        
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(value) || /^[0-9]{10}$/.test(value))
            setActivateButton(true)
        else
            setActivateButton(false)

    }
    function handleSubmit (event) {
        event.preventDefault()
        setError(inputData !== 'tudorbodea12@yahoo.com' ? 'No user found' : '')
    }
    
    return (
        <form onSubmit={handleSubmit} className = 'reset--password sign--in'>
            <h2 className='form--title'>Reset your password</h2>
            <p className='form--description'>We'll email you instructions to reset the password.</p>
            <input 
                type='text'
                name='emailOrPhone'
                value = {inputData}
                onChange = {handleChange}
                placeholder = 'Email or mobile number'
            />
            {error && <span className='login--error'>{error}</span>}
            <button 
                className={classNames('sign--submit',{"valid--value":activateButton})}
                type = {activateButton ? 'submit' : 'button'}
            >Reset password</button>
            <p
                className='text-link return'
                onClick= {() => {
                    setError('')
                    props.toggleResetPassword()
                }
            }
            >Return to login
            </p>

        </form>
  )
}
