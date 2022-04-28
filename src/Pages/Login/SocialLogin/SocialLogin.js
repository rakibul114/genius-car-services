import React from 'react';
import './SocialLogin.css';
import googleIcon from '../../../images/google.png';
import facebookIcon from '../../../images/facebook.png';
import githubIcon from '../../../images/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const navigate = useNavigate();

  let errorElement;
  if (error || error1) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message} {error1?.message}
        </p>
      </div>
    );
  }
  

  if (user || user1) {
    navigate('/home');
  }

    return (
      <div>
        <div className="d-flex align-items-center">
          <div style={{ height: "1px" }} className="bar-color w-50"></div>
          <p className="mt-2 px-3">or</p>
          <div style={{ height: "1px" }} className="bar-color w-50"></div>
        </div>
        {errorElement}
        <div className="text-center">
          <button
            onClick={() => signInWithGoogle()}
            className="google-button w-75 p-2 bg-light rounded"
          >
            <img height={40} src={googleIcon} alt="" /> Google Sign In
          </button>
        </div>
        <div className="text-center">
          <button className="facebook-button w-75 p-2 bg-light rounded my-3">
            <img height={40} src={facebookIcon} alt="" /> Facebook Sign In
          </button>
        </div>
        <div className="text-center">
          <button
            onClick={() => signInWithGithub()}
            className="github-button w-75 p-2 bg-light rounded"
          >
            <img height={40} src={githubIcon} alt="" /> Github Sign In
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;