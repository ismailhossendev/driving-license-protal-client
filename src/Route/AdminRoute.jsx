import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../contexts/AuthContext';

const AdminRoute = ({ children }) => {
    const { user, loading, logout } = useContext(authContext);
    const location = useLocation();


    if (loading) {
        return
    }
    if (user.role === "admin") {
        return children
    }
    logout()
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default AdminRoute;