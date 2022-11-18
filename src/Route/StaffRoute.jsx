import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../contexts/AuthContext';

const StaffRoute = ({ children }) => {
    const { user, loading, logout } = useContext(authContext);
    const location = useLocation();


    if (loading) {
        return
    }
    if (user.role === "admin" || user.role === "staff") {
        return children
    }
    logout()
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default StaffRoute;