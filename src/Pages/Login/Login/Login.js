import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import loginImg from "../../../assets/images/login.png"
import { TextField, Button, Typography } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './../../../Hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';


const Login = () => {

    const [loginData, setLoginData] = React.useState({});
    const { loginUser, isLoading, user,  errorMsg, GoogleLogin } = useAuth();

    
    const location = useLocation()
    const navigate = useNavigate()
    // const homePage = location.state['/']

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogin = { ...loginData };
        newLogin[field] = value;

        setLoginData(newLogin);

    }
    // const redirect = () => {
    //     location.state ? navigate(location?.state?.from) : navigate("/")
    // }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        loginUser(loginData.email, loginData.password, location, navigate)

        e.target.reset();
    }

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        GoogleLogin(location, navigate)
    }






    return (<>
       
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ p: 5 }}>
                        <Grid sx={{ width: '75%', display: 'flex', marginTop: '30px', alignItems: '', justifyContent: 'center', }} item xs={12} sm={12} md={6}>

                            <form onSubmit={handleLoginSubmit}>
                                <Typography sx={{ textAlign: 'center', mb: 2 }} variant='h2' color="info.main">Login</Typography>

                                {/* EMAIL */}
                                {/* ----------------------- */}
                                <TextField type="email" required onChange={handleOnChange} sx={{ width: 1, mb: 3 }} id="outlined-basic1" label="Email" variant="outlined" name='email' />


                                {/*PASSWORD */}
                                {/* ------------------------ */}
                                <TextField type="password" required onChange={handleOnChange} sx={{ width: 1 }} id="outlined-basic2" label="Password" variant="outlined" name='password' />

                                <Typography variant='subtitle2' sx={{ mb: 3 }}>Forgot Password</Typography>
                                <Button type="submit" sx={{ width: 1 }} variant='contained'>Log in</Button>

                                <Typography variant='subtitle1' sx={{}}>New to DoctorsPortal ! <Link to="/register">Create a new account</Link></Typography>
                                <Typography variant="h6" sx={{ textAlign: 'center', mb: 3 }} color='text.secondary' >  OR </Typography>
                                <Button onClick={handleGoogleLogin} sx={{ width: 1 }} variant='outlined'>Continue With Google</Button>

                                {isLoading && <CircularProgress sx={{ m: " auto", display: "flex", alignItems: "center" }} disableShrink />}

                                {user.email && <Alert sx={{ mt: 2 }} severity="success">Successfully log in</Alert>}

                                {errorMsg?.code &&
                                    <Alert severity="error" sx={{ mt: 2 }} >{errorMsg?.code}</Alert>}

                            </form>
                        </Grid>

                        <Grid sx={{ display: "flex", justifyContent: 'end' }} item xs={12} sm={12} md={6}>
                            <img style={{ width: "80%", height: "100%" }} src={loginImg} alt="" />
                        </Grid>

                    </Grid>
                </Box >
    </>);
};

export default Login;