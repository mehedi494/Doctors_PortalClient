import React from 'react';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const BookingModal = ({ openModal, setOpenModal, service }) => {
    const { name, time } = service;
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
        e.preventDefault()
        window.alert('Submitting')
        handleClose()
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
                            <form component="form" onSubmit={handleBookingSubmit}>
                                <h3>{name}</h3>
                                <TextField id="outlined-basic" label="Name" variant="outlined" />
                                <br />
                                <br />
                                <TextField id="filled-basic" label="Email" variant="filled" />
                                <br />
                                <br />

                                <TextField id="standard-basic" label="Phone" variant="standard" />
                                <br /><br />
                                <TextField value={time} readonly variant="outlined" />
                                <br /><br />
                                <Button type="submit" variant='contained'>Submit</Button>

                            </form>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;