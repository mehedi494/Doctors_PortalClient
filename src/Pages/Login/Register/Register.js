import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import loginImg from "../../../assets/images/login.png"
import { TextField, Button, Typography, CircularProgress } from '@mui/material';
import { Link,  useNavigate, } from 'react-router-dom';
import { useAuth } from './../../../Hooks/useAuth';


const Register = () => {
    const [registerData, setRegisterData] = React.useState({});
    const { Register, isLoading, errorMsg, user, GoogleLogin } = useAuth();
    
    const navigate = useNavigate()


    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogin = { ...registerData };
        newLogin[field] = value;

        setRegisterData(newLogin);

    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        if (registerData.password !== registerData.password2) {
            alert(" YOUR PASSWORD IS NOT MATCHING.., ")
            return
        }
        alert("Success Register")
        Register(registerData.name,registerData.email,registerData.password)
        console.log(registerData.name, registerData.email, registerData.password,navigate);
        // e.target.reset();
        // navigate("/")

    }

    return (
        <>
        {
            !user.email ? <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ p: 5 }}>
                <Grid sx={{ width: '75%', display: 'flex', marginTop: '30px', alignItems: '', justifyContent: 'center', }} item xs={12} sm={12} md={6}>

                    {!isLoading ? <form onSubmit={handleRegisterSubmit}>
                        <Typography sx={{ textAlign: 'center', mb: 2 }} variant='h2' color="info.main">Register</Typography>

                        <Typography variant='subtitle' color="error.main">{errorMsg}</Typography>

                        {/* Name */}
                        <TextField type="text"  name="name" required onChange={handleOnChange} sx={{ width: 1, mb: 3 }} id="outlined-basic" label="Name" variant="outlined" />

                        {/* EMAIL */}
                        {/* ----------------------- */}
                        <TextField type="email" required onChange={handleOnChange} sx={{ width: 1, mb: 3 }} id="outlined-basic" label="Email" variant="outlined" name='email' />


                        {/*PASSWORD */}
                        {/* ------------------------ */}
                        <TextField type="password" required onChange={handleOnChange} sx={{ width: 1, mb: 3 }} id="outlined-basic" label="Password" variant="outlined" name='password' />
                        {/*PASSWORD2 */}
                        {/* ------------------------ */}
                        <TextField type="password" required onChange={handleOnChange} sx={{ width: 1 }} id="outlined-basic" label="Confirm Password" variant="outlined" name='password2' />

                        <Typography variant='subtitle2' sx={{ mb: 3 }}>Forgot Password</Typography>
                        <Button type="submit" sx={{ width: 1 }} variant='contained'>Register</Button>

                        <Typography variant='subtitle1' sx={{}}>Already Register ! <Link to="/login">Log in</Link></Typography>
                        <Typography variant="h6" sx={{ textAlign: 'center', mb: 3 }} color='text.secondary' >  OR </Typography>
                                <Button onClick={GoogleLogin} sx={{ width: 1 }} variant='outlined'>Continue With Google</Button>
                    </form>
                        :
                        <CircularProgress sx={{ m: " auto", display: "flex", alignItems: "center" }} disableShrink />}



                </Grid>


                <Grid sx={{ display: "flex", justifyContent: 'end' }} item xs={12} sm={12} md={6}>
                    <img style={{ width: "80%", height: "100%" }} src={loginImg} alt="" />
                </Grid>

            </Grid>
        </Box> :
                    navigate("/appoinment")
    }
    </>);

};

export default Register;