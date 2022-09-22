import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAuth } from '../../../Hooks/useAuth';
import { Box, Button, CircularProgress } from '@mui/material';
import ConfirmPopup from './ConfirmPopup/ConfirmPopup';





const Appointments = ({ date }) => {
    const { user, token, } = useAuth();
    const [isLoading, setIsLoading] = useState(true)
    const [appointments, setAppointments] = useState([]);

    const [open, setOpen] = React.useState(false);
    const [id, setId] = React.useState(' ');

    const handleClickOpen = (e) => {
setId(e)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    useEffect(() => {
        setIsLoading(true)
        const uri = `http://localhost:5000/appointments?email=${user?.email}&date=${date}`
        fetch((uri), {
            headers: {
                "authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setIsLoading(false)
                setAppointments(data)
            })

    }, [date, user.email, token])

    

    if (appointments?.length) {

        return (

            <Box>
                {<ConfirmPopup handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} appointments={appointments} setAppointments={setAppointments} id={id} ></ConfirmPopup>}
                {!isLoading ? <TableContainer component={Paper}>
                    <Table sx={{}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Service</TableCell>
                                <TableCell align="right">Time</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Action</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {appointments?.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.pateintName}
                                    </TableCell>
                                    <TableCell align="right">{row.serviceName}</TableCell>
                                    <TableCell align="right">{row.time}</TableCell>
                                    <TableCell align="right">Pending</TableCell>
                                    <TableCell align="right"><Button variant="contained" onClick={()=>handleClickOpen(row._id)}>Remove</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer> :
                    <Box sx={{ height: "200px", display: "flex", alignItems: "center" }}>
                        <CircularProgress sx={{ m: " auto", }} disableShrink />
                    </Box>
                }
            </Box>
        );
    }
    else {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                {!isLoading ? <Box sx={{ display: "flex", alignItems: "center" }}>
                    <h4>No Appointment This Date</h4>
                </Box> : <Box sx={{ height: "200px", display: "flex", alignItems: "center" }}>
                    <CircularProgress sx={{ m: " auto", }} disableShrink />
                </Box>}
            </Box>
        )
    }


};

export default Appointments;