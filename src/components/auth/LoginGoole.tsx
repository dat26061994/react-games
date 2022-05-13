import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useAuthStore } from '../../store/auth';
import { useNavigate } from 'react-router-dom';
import { AuthWrapper } from './Styled';
import { observer } from "mobx-react-lite";
import { userInfor } from '../../interface/IAuth'

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const LoginGoogle: any = (props: any) => {

    const authStore = useAuthStore();
    const navigate = useNavigate();
    const { userInfor, setAuthInfor } = authStore;
    
    const responseGoogle = (response: any) => {
        const data = {
            isLoggedIn: false,
            infor: {} as userInfor,
        };
        
        if (response && !response.error) {
            data.isLoggedIn = true;
            data.infor.name = response?.profileObj?.name || '';
            data.infor.avatar = response?.profileObj?.imageUrl || '';
            data.infor.email = response?.profileObj?.email || '';
            data.infor.accessToken = response?.accessToken || '';
            setAuthInfor(data);
            navigate('/');
        }
    }

    return (
        <AuthWrapper>
            <GoogleLogin
                clientId={ CLIENT_ID as string }
                buttonText="Login"
                cookiePolicy={'single_host_origin'}
                render={renderProps => (
                    <button className="btnGoogle login-with-google-btn" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        Sign In with Google
                    </button>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                isSignedIn={false}
            />
        </AuthWrapper>
    );

}

export default observer(LoginGoogle);