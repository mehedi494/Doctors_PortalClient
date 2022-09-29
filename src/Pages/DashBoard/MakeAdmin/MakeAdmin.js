
import { FormControl, TextField, Button, Container, Alert } from '@mui/material';
import React from 'react';
import {  useState } from 'react';
import { useAuth } from '../../../Hooks/useAuth';



const MakeAdmin = () => {
    const [newAdmin, setNewAdmin] = useState('')

    const { token } = useAuth()
    const [alert, setAlert] = useState(' ')


    const handleOnblur = e => {
        // console.log(e.target.value)
        const email = e.target.value
        setNewAdmin({ email })
    }
    const handleMakeAdmin = (e) => {

        fetch('https://doctorsportal-serverside.onrender.com/make/admin', {
            method: 'PUT',
            headers: {
                "authorization": `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAdmin)
        })
            .then(res => res.json())
            .then(data => {
                setAlert(data)


            })

        e.target.reset()
        e.preventDefault()
    }





    return (
        <Container sx={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
            <h1>Admin pannel</h1>
            <FormControl component="form" onSubmit={handleMakeAdmin} style={{ width: '50%' }}>

                <TextField onBlur={handleOnblur} sx={{ width: 1 }} id="outlined-basic" label="Email" required type="email" variant="outlined" />
                <br />
                <Button type='submit' variant="contained">Submit</Button>

            </FormControl>

            {alert.modifiedCount === 1
                && <Alert sx={{ mt: 2 }} severity="success">Successfull You made new Admin</Alert>}
            {alert.modifiedCount === 0 && alert.matchedCount === 1
                && <Alert sx={{ mt: 2 }} severity="info">This Email Already Admin </Alert>}
            {alert.matchedCount === 0 && <Alert sx={{ mt: 2 }} severity="error" >There no Account Found with this email</Alert>}

        </Container>
    );
};

export default MakeAdmin;