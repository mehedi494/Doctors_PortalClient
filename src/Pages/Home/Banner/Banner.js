import React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import chair from '../../../assets/images/chair.png';
import { Button, Typography } from '@mui/material';

const Banner = () => {
    return (
        <Box container sx={{ flexGrow: 1 ,mt:4}}>
            <Grid container spacing={2} sx={{m:0,display:"flex", alignItems:"center",p:5}}>
                <Grid xs={12} md={7} sx={{textAlign:"left", p:2}}>
                    <Box  >
                        <Typography variant='h3'>
                            Your New Smile  <br/> Starts Here
                        </Typography>
                        <Typography variant='h6'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: "#19D3AE", mt: 2 }}> Get Started</Button>
                    </Box>
                </Grid>
                <Grid xs={12} md={5}>
                    <img style={{width:"100%"}} src={chair} alt="" />
                </Grid>
               
            </Grid>
        </Box>
    );
};

export default Banner;