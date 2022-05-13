import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useAuthStore } from '../../store/auth';
import { useNavigate } from 'react-router-dom';
import { AuthWrapper } from './Styled';
import { observer } from "mobx-react-lite";
import { userInfor } from '../../interface/IAuth'

const APPID = process.env.REACT_APP_FACEBOOK_APP_ID;

const LoginGoogle: any = (props: any) => {

    const authStore = useAuthStore();
    const navigate = useNavigate();

    const { userInfor, setAuthInfor } = authStore;

    const responseFacebook = (response: any) => {
        const data = {
            isLoggedIn: false,
            infor: {} as userInfor,
        };
        if (response) {
            data.isLoggedIn = true;
            data.infor.name = response?.name || '';
            data.infor.avatar = response?.picture?.data?.url || '';
            data.infor.accessToken = response?.accessToken || '';
            data.infor.email = response?.email || '';
        }
        setAuthInfor(data);
        navigate('/');
    }

    return (
        <AuthWrapper>
            <FacebookLogin
                appId={'APPID' as string}
                autoLoad={true}
                fields="name,email,picture"
                cssClass="btnFacebook"
                icon={<FacebookIcon className='mr-1' />}
                callback={responseFacebook}
                textButton = "Sign In with Facebook"
            />
        </AuthWrapper>
    );

}

export default observer(LoginGoogle);