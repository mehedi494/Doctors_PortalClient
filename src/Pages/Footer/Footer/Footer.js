import React from 'react';
import { Typography, Container, Box, Grid, Button } from '@mui/material/';
import footerBg from "../../../assets/images/footer.png"

const Footer = () => {
    const bakgroundStyle = {
        padding:"20px",
        // border:'1px red solid',
        backgroundImage: "linear-gradient(rgba(85, 71, 140, 0.8), rgb(25, 118, 210)",
        
        color:'white'
        
        // background:"rgba(83, 91, 107,0.9)"

    }
    return (

        <Box style={ bakgroundStyle }>
            <Grid container spacing={2} sx={{ }}>

                <Grid xs={12} sm={4} md={4} sx={{ display: "flex", justifyContent: "center", width: "100%", mb: 2, textAlign: "justify", px: 5 }}>

                    <Box sx={{ display: "flex", flexDirection: "column", textAlign: "start" }} >
                        <Typography variant='h5' >Service</Typography>
                        <Typography variant='body'>Emergency Checkup</Typography>
                        <Typography variant='body'>Monthly Checkup</Typography>
                        <Typography variant='body'>Weekly Checkup</Typography>
                        <Typography variant='body'>Deep Checkup</Typography>
                    </Box>

                </Grid>
                <Grid xs={12} sm={4} md={4} sx={{ display: "flex", justifyContent: "center", width: "100%", mb: 2, textAlign: "justify", px: 5 }}>

                    <Box sx={{ display: "flex", flexDirection: "column", textAlign: "start" }} > <Typography variant='h5'>Service</Typography>
                        <Typography variant='body'>Emergency Checkup</Typography>
                        <Typography variant='body'>Monthly Checkup</Typography>
                        <Typography variant='body'>Weekly Checkup</Typography>
                        <Typography variant='body'>Deep Checkup</Typography>
                    </Box>
                </Grid>
                <Grid xs={12} sm={4} md={4} sx={{ display: "flex", justifyContent: "center", width: "100%", mb: 2, textAlign: "justify", px: 5 }}>

                    <Box sx={{ display: "flex", flexDirection: "column", textAlign: "start" }} >
                        <Typography variant='h5'>Service</Typography>
                        <Typography variant='body'>Emergency Checkup</Typography>
                        <Typography variant='body'>Monthly Checkup</Typography>
                        <Typography variant='body'>Weekly Checkup</Typography>
                        <Typography variant='body'>Deep Checkup</Typography>
                    </Box>

                </Grid>




            </Grid>
        </Box>


    );
};

export default Footer;