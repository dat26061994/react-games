import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PrivateRoute = () => {
    const [auth, setAuth] = useState(true);
    
    useEffect(() => {
        const userInfo = localStorage?.getItem('userInfor') || '';
        
        if (userInfo && JSON.parse(userInfo) && JSON.parse(userInfo).infor) {
            setAuth(true);
        } else {
            setAuth(false);
        }
    }, [])

    return auth ? <Outlet /> : <Navigate to="/auth/login" />;
}

export default PrivateRoute