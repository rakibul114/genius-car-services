import React from 'react';
import './SocialLogin.css';
import googleIcon from '../../../images/google.png';

const SocialLogin = () => {
    return (
      <div>
        <div className="d-flex align-items-center">
          <div style={{ height: "1px" }} className="bg-primary w-50"></div>
          <p className="mt-2 px-3">or</p>
          <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        </div>
        <div className="text-center">
          <button className="google-button w-75 p-2 bg-light rounded">
            <img height={40} src={googleIcon} alt="" /> Google Sign In
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;