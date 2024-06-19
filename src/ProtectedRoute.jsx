import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { auth } from './firebase/config';
import { useEffect } from 'react';
import { replace } from 'formik';

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate();
    useEffect(() => {
        const user = localStorage.getItem('user');
        console.log('User:', user);
        if (!user) {
            navigate ("/login", {replace: true});
        }
    }, [navigate]);

    return children;
};

export default ProtectedRoute;