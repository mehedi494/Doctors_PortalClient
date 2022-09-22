import { CircularProgress,Box } from '@mui/material';
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './../../Hooks/useAuth';

const PrivetRoute =  () => {
    const location = useLocation()
    const { user, isLoading } =  useAuth()
    if (isLoading) { 
        return <Box sx={{ height: "100vh", display: "flex", alignItems: "center" }}>
            <CircularProgress sx={{ m: " auto",  }} disableShrink />
        </Box>
    }
    return (user?.email ? <Outlet></Outlet> : <Navigate to='/login' state={{ from: location }} />)
    
    
};

export default PrivetRoute;