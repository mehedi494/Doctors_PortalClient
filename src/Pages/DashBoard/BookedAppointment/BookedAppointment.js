import { Grid } from '@mui/material';
import React, { useState } from 'react';

import Calender from '../../Shared/Calender/Calender';
import Appointments from './../Appointments/Appointments';

const BookedAppointment = () => {
    const [date, setDate] = useState(new Date())
    // console.log(date.toLocaleDateString());
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={12} md={5}>
                <Calender date={date}
                    setDate={setDate}></Calender>

            </Grid>
            <Grid item xs={12} sm={12} md={7}>
                <Appointments date={date} ></Appointments>
            </Grid>

        </Grid>
    );
};

export default BookedAppointment;