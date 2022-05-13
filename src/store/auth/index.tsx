import React from 'react';
import { makeObservable, observable, computed, action, flow } from "mobx"
import { useGoogleLogin } from 'react-google-login';

export class AuthStore {
    infor: any = null;

    clientId = '581925356920-0ifpqpf6na9inpp1t0rmd31t4c0pt22n.apps.googleusercontent.com';
    cookiePolicy = 'single_host_origin';
    isSignedIn = true;

    constructor() {
        makeObservable(this, {
            infor: observable,
            userInfor: computed,
            setAuthInfor: action.bound,
        });
    }

    get userInfor() {
        return this.infor;
    }

    setAuthInfor(value:any) {
        this.infor = value;
        localStorage.setItem('userInfor', JSON.stringify(value));
        
    }

    
    
};

export const authStore = new AuthStore();
export const storeContext = React.createContext(authStore);
export const useAuthStore = (): any => React.useContext(storeContext);