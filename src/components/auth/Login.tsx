import React, { useState } from 'react';
import Card from '@mui/material/Card';
import {AuthWrapper} from './Styled';
import { observer } from "mobx-react-lite";
import LoginGoogle from './LoginGoole';
import LoginFacebook from './LoginFacebook';

const Login: any = () => {
    
    return (
        <div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12">
                    <AuthWrapper>
                        <Card elevation={2} className="login-component center p-5">
                            <div className="flex items-center justify-center">
                                <LoginGoogle />

                                <LoginFacebook />
                            </div>
                        </Card>
                    </AuthWrapper>
                </div>
            </div>
        </div>
    );
}

export default observer(Login);