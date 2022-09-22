import React, { useState } from 'react';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useAuth } from './../../../Hooks/useAuth';


const BookingModal = ({ openModal, setOpenModal, service, date, setSuccessBooking }) => {
    const { name, time } = service;

    const { user, } = useAuth();
    const [isLoading, setIsLoading]=useState(false)
    const { displayName, email } = user;

    const initialInfo = {
        pateintName: user.displayName,
        email: user.email, phone: " "

    }
    const [bookingInfo, setBookingInfo] = useState(initialInfo)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    const handleClose = () => setOpenModal(false);

    const handleBookingSubmit = e => {
        setIsLoading(true)
        e.preventDefault()
        const appoinment = { ...bookingInfo, serviceName: name, time, date: date.$d.toLocaleDateString() }
        // console.log(appoinment);
        
        fetch('http://localhost:5000/appointment', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(appoinment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccessBooking(true)
                    setIsLoading(false)
                    handleClose()
                }
                // console.log(data)
            })

    }

    function handleOnBlur(e) {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
        //    console.log(newInfo);

    }

    return (
        <div>

            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <Box sx={style}>
                        <Box

                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <form style={{ width: "100%" }} component="form" onSubmit={handleBookingSubmit}>

                                <h3>{name}</h3>
                                <TextField sx={{ width: 1 }} value={time} id="outlined-basic" label="Name" variant="outlined" />
                                <br />
                                <br />

                                <TextField onBlur={handleOnBlur} sx={{ width: 1 }} defaultValue={displayName} id="outlined-basic"
                                    name="pateintName" label="Name" variant="outlined" />
                                <br />
                                <br />

                                <TextField onBlur={handleOnBlur} sx={{ width: 1 }} defaultValue={email} id="filled-basic" label="Email"
                                    name='email' variant="outlined" />
                                <br />
                                <br />

                                <TextField onBlur={handleOnBlur} sx={{ width: 1 }} id="standard-basic" required label="Phone"
                                    name="phone" variant="outlined" />
                                <br /><br />

                                <TextField sx={{ width: 1 }} value={date.$d.toDateString()} variant="outlined" />
                                <br /><br />
                                <Button type="submit" variant='contained'>
                                    {isLoading ? 'Loading...': "Submit"}</Button>

                            </form>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;