import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import doctor from "../../../assets/images/doctor.png"
import bg from "../../../assets/images/appointment.png"
import { Button, Typography } from '@mui/material';

import { Container } from '@mui/system';

const AppoinmentBanner = () => {
    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
        backgroundColor: "rgba(83, 91, 107,0.9)",
        backgroundBlendMode:"Darken",
        margin: "100px 0",

    }
    return (
        
        <Box container style={backgroundStyle} sx={{ flexGrow: 1,  } }>
                <Grid container spacing={2} sx={{m:0, display: "flex", justifyContent: "start", textAlign: "start", alignItems: 'center' }}>
                   
                <Grid sx={{ p: 0, m: 0 }} xs={12} md={6}>
                        <img style={{width:"100%", marginTop: "-120px" }} src={doctor} alt="doctorImage" />
                    </Grid>

                

                    <Grid xs={12} md={6} sx={{textAlign:"justify",p:5}}>
                        <Typography variant='h6' sx={{ mb: 4, color:" #19D3AE "}} >
                                Appoinment
                            </Typography>
                        <Typography variant='h6' sx={{ mb: 2, color:"#FFFFFF" }} >
                                Make an Appoinmnet Today
                            </Typography>
                        <Typography variant='p' sx={{ color:"#FFF",}} >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At ab, obcaecati accusamus, ut sed placeat dolore in voluptate nobis distinctio maxime quis quod et sequi cupiditate velit porro blanditiis dolorem minima commodi tenetur quasi recusandae omnis? Expedita ipsum repudiandae aliquam?
                            </Typography>
                        <Button variant="contained" sx={{ backgroundColor:"#19D3AE",display:"block",mt:2}}>Learn more</Button>
                    </Grid>

                </Grid>
            </Box>
       
    );
};

export default AppoinmentBanner;