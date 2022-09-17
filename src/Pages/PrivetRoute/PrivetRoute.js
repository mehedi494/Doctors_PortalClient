import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './../../Hooks/useAuth';

const PrivetRoute = () => {
    const location = useLocation()
    const { user } = useAuth()
    
    return (user?.email ? <Outlet></Outlet> : <Navigate to='/login' state={{ from: location }} />)
    
};

export default PrivetRoute;