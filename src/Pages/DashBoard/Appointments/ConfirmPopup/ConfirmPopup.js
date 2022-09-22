import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useAuth } from './../../../../Hooks/useAuth';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmPopup({ open,  handleClose, appointments, setAppointments,id }) {
    const {token}=useAuth()
    const handleRemove = (id) => {
        console.log(id);

        fetch('http://localhost:5000/delete/appointments', {
            method: "DELETE",
            headers: {
                "authorization": `Brearer ${token}`,
                "content-type": "application/json"
            },
            body: JSON.stringify({ id: id })
        }).then(res => res.json()).then(data => {

            // console.log(data)
            const remaining = appointments.filter(user => user._id !== id)
            setAppointments(remaining)
            handleClose()
        })
    }

    return (
        <div>
            
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"ARE YOU SURE?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        This item is no longer returnable
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button variant="outlined" color="error" onClick={()=>handleRemove(id)}>Yes</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
