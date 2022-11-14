import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../contexts/AuthContext';

const LoginRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();


    if (loading) {
        return
    }
    if (user && user?.uid) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace />
};

export default LoginRoute;