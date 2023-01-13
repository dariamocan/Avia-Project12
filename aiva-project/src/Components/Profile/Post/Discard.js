import React from 'react'
import { Dialog,DialogTitle,DialogContent,DialogActions,DialogContentText, Button} from '@mui/material'

export default function Discard(props) {
  return (
    <Dialog
        open = {props.discard}
        onClose = {props.toggleDiscard}
        aria-labelledby = 'discard-title'
        aria-describedby='discard-description'   
    >
        <DialogTitle
            id = 'discard-title'
        >
        <div className='title-discard'>
            <h2>Discard post?</h2>
            <h4>If u leave, your edits won't be saved.</h4>
        </div>
        </DialogTitle>
        <DialogContent id = 'dialog-description'>
            <DialogContentText className='discard-actions'>
                    <Button onClick = {() => {
                        props.toggleDiscard()
                        if(props.backArrow) {
                            props.handleBack()
                            props.toggleBackArrow()
                            props.changeImgSrc()
                        } else
                            props.togglePost()
                    }} color = "error" className = 'discard-button'>Discard</Button>
                    <Button onClick = {props.toggleDiscard} className = 'cancel-button'>Cancel</Button>
            </DialogContentText>
        </DialogContent>
    </Dialog>
  )
}
