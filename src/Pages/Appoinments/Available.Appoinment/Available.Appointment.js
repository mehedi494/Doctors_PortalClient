import React from 'react';
import { Typography, Grid, Container } from '@mui/material';
import Booking from './../Booking/Booking';

;

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
    
    
    
     
    
    
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ textAlign: "center", color:"info.main" }} fontWeight="600">Avilable appointment '{date.$d.toDateString()}'</Typography> 
            <Grid sx={{ px: 2, mt: 2 }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                {
                    ourService.map(service => <Booking   
                    key ={service.id} service={service}></Booking>) 
                }
                
            </Grid>
           
        </Container>
    );
};

export default AvailableAppointment;