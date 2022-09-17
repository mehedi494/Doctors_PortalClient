import React from 'react';
import AppoinmentHeader from '../AppoinmenHeader/AppoinmentHeader';
import AvailableAppointment from './../Available.Appoinment/Available.Appointment';
import Navigation from './../../Shared/Navigation/Navigation';
import dayjs from 'dayjs';

const Appointment = () => {
    const [date, setDate] = React.useState(dayjs());
    return (
        <div>
            <Navigation></Navigation>
            <AppoinmentHeader date={date} setDate={setDate}></AppoinmentHeader>
            <AvailableAppointment date={date} ></AvailableAppointment>
        </div>
    );
};

export default Appointment;