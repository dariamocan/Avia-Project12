
import { width } from '@mui/system';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import ReactImagePickerEditor, { ImagePickerConf } from 'react-image-picker-editor';
import 'react-image-picker-editor/dist/index.css'
import Discard from './Discard';
import httpClient from '../../../httpClient';

export default function CreatePost(props) {

  const [imageSrc,setImageSrc] = useState("")
  const [discard,setDiscard] = useState(false)
  const [photoSelected,setPhotoSelected] = useState(false)
  const [backArrow,setBackArrow] = useState(false)
  
  const config: ImagePickerConf = {
    borderRadius : '8px',
    language : 'en',
    width : '800px',
    height: '600px',
    objectFit: 'contain',
    compressInitial: null,
    hideDownloadBtn: true,
    hideAddBtn: true,
    
  }
  const handleBack = () => {
    setPhotoSelected(false)
  }

  const changeImgSrc = () => {
    setImageSrc("")
  }
  const toggleBackArrow = () => {
    setBackArrow(false)
  }
  const toggleDiscard = () => {
    setDiscard(prevDiscard => !prevDiscard)
  }
  const initialImage = ""

  return (
    <>
      
      <div className='create-post' tabIndex={0} onKeyDown = {(event) => event.key === 'Escape' ? imageSrc ? setDiscard(true) : props.togglePost() : ""}>
        <div className='upload-photo'>
          <h3>Create new post</h3>
          <hr></hr>
          <button className='close close-white' onClick={() => imageSrc ? setDiscard(true) : props.togglePost() }>✖</button>
          
          <div className={classNames('upload-main',{'photo-selected':photoSelected})}>
           {photoSelected && <i 
            className ="fa-solid fa-arrow-left"
            onClick={() => {
              setBackArrow(true)
              setDiscard(true)
            }}
           ></i>}
           {imageSrc && <button className='select-photo' onClick={() => setPhotoSelected(true)}>{photoSelected ? 'Share' : 'Next'}</button>}
            {!photoSelected && < ReactImagePickerEditor
              imageSrcProp={initialImage}
              config={config}
              imageChanged={(newDataUri: any) => { setImageSrc(newDataUri) }} 
            /> }
            
            {photoSelected && 
              <img
                className='selected-image'
                src = {imageSrc}/> 
            }
            {discard && <Discard
              togglePost = {props.togglePost}
              discard = {discard} 
              toggleDiscard = {toggleDiscard}
              backArrow = {backArrow}
              toggleBackArrow = {toggleBackArrow}
              handleBack = {handleBack}
              changeImgSrc = {changeImgSrc}
            />}
            {photoSelected && <div className='vl'></div>} 
            {photoSelected && <div className='post-description'>
              
              <div className='profile-info'>
                <p>{props.profileData.username}</p>
                <img src = {props.profileData.image} />
              </div>
              <textarea 
                placeholder='Write a caption...'
              />
            </div> }
          </div>
          
        </div>
        <div className='black-screen'></div>
      </div>
    </>
  )
}
