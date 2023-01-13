import React,{useState} from 'react'
import test from '../../images/test.jpg'
import './EditProfile.css'
import classNames from 'classnames'
import { Link,useNavigate } from 'react-router-dom';
import ChangeProfilePhoto from './ChangeProfilePhoto';

export default function EditProfile() {

    const [dialog,setDialog] = useState(false)
    const [imgCrop,setImgCrop] = useState(false)
    const [formData,setFormData] = useState({
        username:"Username",
        email:"tudorbodea12@yahoo.com",
        phoneNumber:"0720450578"
    })
    const [activateButton,setActivateButton] = useState(false)
    const [storeImage,setStoreImage] = useState({})


    const saveImage = () => {
        setStoreImage({imgCrop})
        setDialog(false)
    }

    const toggleDialog = () => {
        setDialog(prevState => !prevState)
    }
    function handleChange (event) {

        const {name,value,files} = event.target
        setActivateButton(true)
        setFormData(prevState => ({
            ...prevState,
            [name]:value
        }))
    }
    const navigate = useNavigate()

    function handleSubmit (event) {
        event.preventDefault()
        navigate('/account')
    }

    const handleClose = () => {
        navigate('/account')
    }
    const onCrop = (preview) => {
        setImgCrop(preview)
    }
    const onClose = () => {
        setImgCrop(null)
    }

    const profileImageShow = storeImage.imgCrop

    ///console.log(imgCrop)
    ///console.log(storeImage)

    return (
        <div className='edit-profile'>
            <button className='close'onClick={handleClose}>✖</button>
            <div className='top-section'> 
                <img src = {profileImageShow ? profileImageShow : test}/>
                <div className='right'>
                    <p>Username</p>
                    {/* <Avatar width={200} height = {100} onClose = {onCrop} onCrop = {onClose}/> */}
                    <ChangeProfilePhoto 
                        onCrop = {onCrop}
                        onClose = {onClose}
                        dialog = {dialog}
                        toggleDialog = {toggleDialog}
                        saveImage = {saveImage}
                    />  
                </div>
            </div>
            <form className='new-data' onSubmit={handleSubmit}>
                
                <div className='username-label'>
                    <label htmlFor='username'>Username</label>
                    <input 
                        type= 'text'
                        name='username'
                        id='username'
                        value = {formData.username}
                        onChange = {handleChange}
                        placeholder = 'Username'
                    />
                </div>
                <div className='email-label'>
                    <label htmlFor='email'>Email</label>
                    <input 
                        type = 'email'
                        name = 'email'
                        id = 'email'
                        value={formData.email}
                        onChange = {handleChange}
                        placeholder = 'Email'
                    />
                </div>
                <div className='phone-number-label'>
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <input 
                        type = 'phone'
                        name = 'phoneNumber'
                        id = 'phoneNumber'
                        value={formData.phoneNumber}
                        onChange = {handleChange}
                        placeholder = 'Phone Number'
                    />
                </div>

                <button type = {activateButton ? 'submit' : 'button'}className={classNames('sign--submit',{"valid--value":activateButton})}>Submit</button>
            </form>
        </div>
    )
}
