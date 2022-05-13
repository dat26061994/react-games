import React from 'react';
import { useGoogleLogin } from 'react-google-login';

const clientId = '581925356920-0ifpqpf6na9inpp1t0rmd31t4c0pt22n.apps.googleusercontent.com';

function LoginHooks() {
  const onSuccess = (res: any) => {
    console.log('Login Success: currentUser:', res.profileObj);
  };

  const onFailure = (res: any) => {
    console.log('Login failed: res:', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  });

  return (
    <button onClick={signIn} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}

export default LoginHooks;