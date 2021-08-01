import React from "react";
import { useState, useEffect, useContext } from "react";
import {
  Bottom,
  ErrorMessage,
  LoginForm,
  SubmitButton,
  Wrapper,
  LogoImg,
} from "./SignUpPage.styles";
import Logo from "./../Header/photos/Karifgram.png";
import { useHistory } from "react-router-dom";

import FirebaseContext from "../../Context/firebase";
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(``);

  const isInvalid = password === "" || emailAddress === "";

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      await firebase;

      history.push(ROUTES.DASHBOARD);
    } catch (error) {}
  };

  useEffect(() => {
    document.title = "SignUp - Instagram";
  });
  return (
    <>
      <Wrapper>
        <LogoImg src={Logo}></LogoImg>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <LoginForm onSubmit={"handleLogin"} method="POST">
          <input
            aria-label="Enter full name"
            type="text"
            placeholder="Full Name"
            onChange={({ target }) => setFullName(target.value.toString())}
            value={fullname}
          />
          <input
            aria-label="Enter Username"
            type="text"
            placeholder="Username"
            onChange={({ target }) => setUserName(target.value.toString())}
          />
          <input
            aria-label="Enter your email address"
            type="text"
            placeholder="Email address"
            onChange={({ target }) => setEmailAddress(target.value.toString())}
          />
          <input
            aria-label="Enter your password"
            type="password"
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
          <SubmitButton disabled={isInvalid} type="submit">
            Sign Up
          </SubmitButton>
        </LoginForm>
      </Wrapper>

      <Bottom>
        <div>Have an Account?</div> <Link to="/login">Log In</Link>
      </Bottom>
    </>
  );
};

export default SignUpPage;
