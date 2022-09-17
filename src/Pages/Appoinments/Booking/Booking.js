import React from 'react';
import { Grid, Paper, Typography, Box, Button } from '@mui/material/';
import {  } from '@mui/material/';
import BookingModal from './../BookingModal/BookingModal';


import TextField from '@mui/material/TextField';





const Booking = ({ service }) => {
    const { name, time, space } = service;
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpen = () => setOpenModal(true);
    return (
       
        <>
            <Grid item xs={12} sm={6} md={4} >
                <Paper elevation={3} >
                    <Box sx={{ textAlign: 'center', py: 2 }}>
                        <Typography variant='h4' sx={{ color: "info.main" }}>{name}</Typography>
                        <Typography variant='h5' color='text.secondary'>{time}</Typography>
                        <Typography variant='h6' color='text.disabled'>{space} Space Available</Typography>
                        <Button onClick={handleOpen} variant="contained" color="info" sx={{ display: "block", margin: "0 auto" }}>{name} Book Now </Button>
                    </Box>
                </Paper>
            </Grid>
            <BookingModal time={time} key={service.id} service={service} openModal={openModal} setOpenModal={setOpenModal} ></BookingModal>
        </>
        
    );
};

export default Booking;