import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [agree, setAgree] = useState(false);
    const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth);

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // const agree = event.target.terms.checked;
    if (agree) {
      createUserWithEmailAndPassword(email, password);
    }
    
  };

  const navigateLogin = (event) => {
    navigate("/login");
    };
    
    if (user) {
        navigate('/home');
    }

  return (
    <div>
      <div className="container w-50 mx-auto bg-light p-5 shadow mt-5 rounded">
        <h2 className="text-primary text-center mt-2">Please Register</h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              ref={nameRef}
              type="text"
              placeholder="Enter Name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              className={agree ? "text-primary" : "text-danger"}
              onClick={() => setAgree(!agree)}
              type="checkbox"
              label="Accept Genius Car Terms and Conditions"
              name="terms"
              id="terms"
            />
          </Form.Group>
          <div className="text-center">
            <Button
              disabled={!agree}
              className="w-75 mb-2"
              variant="primary"
              type="submit"
            >
              Register
            </Button>
          </div>
        </Form>
        <p className="mt-2">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-danger text-decoration-none"
            onClick={navigateLogin}
          >
            Please Login
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
