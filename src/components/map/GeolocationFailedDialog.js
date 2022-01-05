import React from 'react'
import { Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from '@mui/material'
import Button from '@mui/material/Button'

const GeolocationFailedDialog = ({ handleClose, open }) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <DialogTitle sx={{ color: "black", opacity: 0.7 }}>
                    Location Services Disabled
                </DialogTitle>
                <DialogContentText id="alert-dialog-description">
                    Looks like you've got location services disabled for this site. If you'd like to see products near you, activate location services in your settings.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autoFocus>
                    Okay
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default GeolocationFailedDialog
