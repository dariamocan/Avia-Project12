import React,{useState} from 'react'
import './login.css'
import {Link} from 'react-router-dom'
import classNames from 'classnames'
import httpClient from '../../httpClient'

import Reset from './Reset'

export default function(props) {

    const [formData,setFormData] = useState({
        username:"",
        emailOrPhone:"",
        password:"",
        confirmPassword:"",
        staySigned:false
    })
    const [activateButton,setActivateButton] = useState(false)
    const [error,setError] = useState('')
    const [showPassword,setShowPassword] = useState(true)
    const [showConfirmPassword,setShowConfirmPassword] = useState(true)
    const [checkPassword,setCheckPassword] = useState({
        lowerCase:true,
        upperCase:true,
        number:true,
        length:true
    })
    const [resetPassword,setResetPassword] = useState(true)

    function handleChange (event) {
        
        const {name,value} = event.target
        setFormData(prevState => ({
            ...prevState,
            [name]:value
        }))

        !props.form ? handleSignInValidity() : handleCreateAccountValidity()

        if(name === 'password') {
            if(/^(?=.*[a-z])/.test(value) === true)
                setCheckPassword((prevState) => ({
                    ...prevState,
                    lowerCase:false
                }))
            else
                setCheckPassword((prevState) => ({
                    ...prevState,
                    lowerCase:true
                }))
            if(/^(?=.*[A-Z])/.test(value) === true)
                setCheckPassword((prevState) => ({
                    ...prevState,
                    upperCase:false
                }))
            else
                setCheckPassword((prevState) => ({
                    ...prevState,
                    upperCase:true
                }))
            if(/^(?=.*[0-9])/.test(value) === true)
                setCheckPassword((prevState) => ({
                    ...prevState,
                    number:false
                }))
            else
                setCheckPassword((prevState) => ({
                    ...prevState,
                    number:true
                }))
            if(value.length >= 8)
                setCheckPassword((prevState) => ({
                    ...prevState,
                    length:false
                }))
            else
                setCheckPassword((prevState) => ({
                    ...prevState,
                    length:true
                }))
        }
          
    }

    
    function handleSignInValidity() {
    
        const emailInput = document.querySelector('.email')
        const passwordInput = document.querySelector('.password')
        if(emailInput.checkValidity() && passwordInput.value.length >= 8)
            setActivateButton(true)
        else
            setActivateButton(false)
        
    }
    function handleCreateAccountValidity() {
        const emailInput = document.querySelector('.email')
        const passwordInput = document.querySelectorAll('.password')
        const username = document.querySelector('#username')
        if(emailInput.checkValidity() && passwordInput[0].checkValidity() && passwordInput[1].checkValidity() && username.value.length !== 0)
            setActivateButton(true)
        else
            setActivateButton(false)
    }

    const handleSignInSubmit = async (event) => {
    
        event.preventDefault()

        // if(formData.emailOrPhone !== 'tudorbodea12@yahoo.com' || formData.password !== 'Tudor1234') {
        //     setError('Sorry, your password was incorrect. Please double-check your password.')
        //     return
        // }
        // else setError('')

        const email = formData.emailOrPhone
        const password = formData.password

        try {
            const resp = await httpClient.post("/login", {
                email,password
            })
            props.toggleLogin()
        }
        catch(e) {
            if(e.response.status === 401)
                setError("Sorry, your password was incorrect. Please double-check your password.")
        }

        
        // setFormData({
        //     username:"",
        //     emailOrPhone:"",
        //     password:"",
        //     confirmPassword:"",
        //     staySigned:false
        // })
    }

    const handleCreateAccountSubmit = async(event) => {
        event.preventDefault()
        // if(formData.password !== formData.confirmPassword) {
        //     setError('Passwords do not match')
        //     return
        // } 
        // if(formData.username === 'Tudor') {
        //     setError('Username already taken')
        //     return
        // }
        const email = formData.emailOrPhone
        const password = formData.password
        const username = formData.username
        
        try {
            const resp = await httpClient.post("/register", {
                email,password,username
            })
            props.toggleLogin()
        }
        catch (e) {
            if(e.response.status === 400) {
                setError(e.response.data.error)
            }
        }
        

        // setFormData({
        //     username:"",
        //     emailOrPhone:"",
        //     password:"",
        //     confirmPassword:"",
        //     staySigned:false
        // })
        ///alert('Account created')

    }
    function toggleShowPassword () {
        setShowPassword(prevState => !prevState)
    }

    function toggleShowConfirmPassword () {
        setShowConfirmPassword(prevState => !prevState)
    }
    
    function toggleResetPassword () {
        setResetPassword(prevState => !prevState)
    }
    
    return (
        !props.login && <div className='login'>
            <div className='screen--black'
                onClick={props.toggleOff}
            >
            </div>
            {resetPassword && 
                <form 
                    tabIndex = {0} 
                    className='sign--in' 
                    onKeyDown = {(event) => event.key === 'Escape' ? props.toggleOff() : ""} 
                    onSubmit={!props.form ? handleSignInSubmit : handleCreateAccountSubmit} 
                    noValidate
                >
                <button type = 'button' className='close' onClick={props.toggleOff}>✖</button>
                <h2 className='sign--title'>{props.form ? "Create account" : "Sign in"}</h2>
               {props.form &&  <input
                    id = 'username'
                    placeholder='Username'
                    name='username'
                    type='text'
                    value={formData.username}
                    onChange={handleChange}
                /> }
                
                <label className='email--container'>
                    {/* <span className = {classNames('placeholder',{'placeholder--up':formData.email.length})}>Email</span> */}
                    <input
                        onChange = {handleChange}
                        name = "emailOrPhone"
                        className= {classNames('email',{'email--write':formData.emailOrPhone.length})}
                        type = "text"
                        required
                        value = {formData.emailOrPhone}
                        placeholder = 'Email or mobile number'
                    />
                </label>
                {/* <span className='login--error'>It should be a valid email adress!</span> */}
                <div className='password--container'>
                    <input 
                        onChange = {handleChange}
                        name = "password"
                        className = {classNames('password',{'empty':!formData.password.length,'error': error})}
                        type = {showPassword ? 'password' : 'text'}
                        required
                        minLength={8}
                        placeholder = "Password"
                        value = {formData.password}
                        pattern = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'
                    />
                    {formData.password && <div className='show--container'>
                    <button 
                        onClick={toggleShowPassword}
                        type = 'button' 
                        className={classNames('show',{'show--on':showPassword})}
                    >
                        {showPassword ? 'Show' : 'Hide'}
                    </button>
                    </div>}
                </div>
               {props.form && formData.password.length !== 0 && <div className='password--requirements'>
                    <h4>New password must include at least:</h4>
                    <ul>
                        <li name = 'da' className={classNames('incorect',{'corect':!checkPassword.lowerCase})}>
                            {!checkPassword.lowerCase ? <i className="fa-solid fa-check"></i> 
                            : <i className="fa-solid fa-circle"><i className="fa-solid fa-exclamation"></i></i>
                            }
                            One lowercase character
                        </li>
                        <li 
                            className={classNames('incorect',{'corect':!checkPassword.upperCase})}>
                            {!checkPassword.upperCase ? <i className="fa-solid fa-check"></i> 
                            : <i className="fa-solid fa-circle"><i className="fa-solid fa-exclamation"></i></i>
                            }
                            One uppercase character
                        </li>

                        <li 
                            className={classNames('incorect',{'corect':!checkPassword.number})}>
                            {!checkPassword.number ? <i className="fa-solid fa-check"></i> 
                            : <i className="fa-solid fa-circle"><i className="fa-solid fa-exclamation"></i></i>
                            }
                            One number</li>
                        <li 
                            className={classNames('incorect',{'corect':!checkPassword.length})}>
                            {!checkPassword.length ? <i className="fa-solid fa-check"></i> 
                            : <i className="fa-solid fa-circle"><i className="fa-solid fa-exclamation"></i></i>
                            }
                            8 characters minimum
                        </li>
                    </ul> 
                </div> }

              {props.form && <div className='password--container'>
                    <input 
                        onChange = {handleChange}
                        name = "confirmPassword"
                        className = {classNames('password',{'empty':!formData.confirmPassword.length})}
                        type = {showConfirmPassword ? 'password' : 'text'}
                        required
                        minLength={8}
                        placeholder = "Confirm password"
                        value = {formData.confirmPassword}
                    />
                    {formData.confirmPassword && <div className='show--container'>
                    <button 
                        onClick = {toggleShowConfirmPassword} 
                        type = 'button' 
                        className={classNames('show',{'show--on':showConfirmPassword})}
                    >
                        {showConfirmPassword ? 'Show' : 'Hide'}
                    </button>
                    </div>}
                </div> }


              {/* {!props.form && <div className='stay--signed'>
                     <input 
                        type= 'checkbox'
                        name = 'staySigned'
                        id = 'staySigned'
                        onChange={handleChange}
                        checked = {formData.staySigned}
                    />
                    <label htmlFor='staySigned'>Keep me signed in</label>
                </div> } */}


                {error && <span className='login--error'>{error}</span>}
                <button 
                    className={classNames('sign--submit',{"valid--value":activateButton})} 
                    type={activateButton ? 'submit' : 'button'}
                    >
                    {props.form ? 'Register' : 'Sign in'}
                </button>
                <footer className='sign--in--footer'>
                   {!props.form && 
                    <Link 
                        onClick={toggleResetPassword}
                        className='text-link change--password'
                    >Forgot password?</Link> }
                    <hr></hr> 
                    <p>
                        <span>
                            {!props.form ? "Don't have an account?" : "Already have an account?"}
                        </span>
                        <Link 
                            className='text-link register'
                             onClick= {() => {
                                setError('')
                                props.toggleForm()
                                setFormData({
                                    username:"",
                                    emailOrPhone:"",
                                    password:"",
                                    confirmPassword:"",
                                    staySigned:false
                                })
                                setActivateButton(false)
                            }
                            }
                        >{!props.form ? 'Register' : 'Log in'}
                        </Link></p>
                </footer>
            </form> }
            {!resetPassword && <Reset toggleResetPassword = {toggleResetPassword}/> }
        </div>
  )
}
