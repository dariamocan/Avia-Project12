import React,{useState} from 'react'
import { Dialog,DialogTitle,DialogContent,DialogActions,DialogContentText} from '@mui/material'
import Avatar from 'react-avatar-edit'

export default function ChangeProfilePhoto(props) {

  
  
  return (
    <>
      <h5 onClick={props.toggleDialog} className = 'change-picture'>Change profile picture</h5>
      <Dialog
        open = {props.dialog}
        onClose = {props.toggleDialog}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
      >
          <DialogTitle  
            style = {{background: 'linear-gradient(to right, #314755 0%, #26a0df  51%, #314755  100%)'}} 
            id = 'dialog-title' className='dialog-title'> <h3>Change profile picture </h3>
          <i 
            className="fa-solid fa-x" 
            onClick={props.toggleDialog}
          >
          </i></DialogTitle>
          <DialogContent style = {{background: 'linear-gradient(to right, #314755 0%, #26a0df  51%, #314755  100%)'}}>
            <DialogContentText className='dialog-content' id = 'dialog-description'>
              <Avatar 
                width={400} 
                height = {300}
                onClose = {props.onClose}
                onCrop = {props.onCrop}
              ></Avatar>
              <button onClick = {props.saveImage} className='save'>Save</button>
            </DialogContentText>
          </DialogContent>
      </Dialog>
    </>
  )
}
