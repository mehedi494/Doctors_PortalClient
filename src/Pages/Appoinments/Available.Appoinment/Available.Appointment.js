import React , { useState } from 'react';
import { Typography, Grid, Container, Alert } from '@mui/material';
import Booking from './../Booking/Booking';




const ourService = [
    {
        id: 0,
        name: 'Teeth Orthodontics',
        time: "8:00 AM - 9:00 AM",
        space: 5
    },
    {
        id: 1,
        name: 'Cavity Protection',
        time: "9:00 AM - 10:00 AM",
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: "10:05 am - 11:30 am",
        space: 5
    },
    {
        id: 3,
        name: 'Oral Surgery',
        time: "6:00 PM - 7:00 PM",
        space: 10
    },
    {
        id: 4,
        name: 'Pedritic Dental',
        time: "7:00 PM - 8:00 PM",
        space: 5
    },
    {
        id: 5,
        name: 'Teeth Cleaning',
        time: "8:00 PM - 9:00 PM",
        space: 5
    }
]
const AvailableAppointment = ({ date }) => {
    const [successBooking, setSuccessBooking] = useState(false)
    
    
     
    
    
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ textAlign: "center", color: "info.main" }} fontWeight="600">Available appointment '{date.$d.toDateString()}'</Typography> 
            {
                successBooking && <Alert severity="success" sx={{ mt: 2 }} >Appointment Successfull</Alert>
            }
            <Grid sx={{ px: 2, mt: 2 }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                {
                    ourService.map(service => <Booking   
                        key={service.id} date={date} service={service} setSuccessBooking={setSuccessBooking}></Booking>) 
                }
                
            </Grid>
           
        </Container>
    );
};

export default AvailableAppointment;