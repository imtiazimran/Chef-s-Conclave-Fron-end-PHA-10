import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext)
    console.log(isLoading, user)

    const location = useLocation()

    if (isLoading) {
        return <div className='text-center mt-4'><Spinner animation="border" variant="primary" /></div>
    }
    if (user) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;