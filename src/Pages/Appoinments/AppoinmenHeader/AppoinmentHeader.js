import React from 'react';
import chair from "../../../assets/images/chair.png";
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';
import Calender from '../../Shared/Calender/Calender';


const AppoinmentHeader = ({ date, setDate }) => {
    return (
        <Box container sx={{ }}>
            <Grid  container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, }} sx={{ px: 2, alignItems: 'center', justifyContent:'start' }}>
                <Grid sx={{width:"100%"}} xs={12} sm={6} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>

                <Grid xs={12} sm={6} md={6}>
                    <img style={{width:"100%"}} src={chair} alt="" />
                </Grid>
              
               
            </Grid>
        </Box>
    );
};

export default AppoinmentHeader;