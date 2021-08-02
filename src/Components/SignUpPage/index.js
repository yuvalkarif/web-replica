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
import { doesUserNameExist } from "../../services/firebase";

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
    const usernameExists = await doesUserNameExist(userName);
    if (!usernameExists.length) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);
        //auth
        await createdUserResult.user.updateProfile({ displayName: userName });
        //firebase user collection
        await firebase
          .firestore()
          .collection("users")
          .add({
            userId: createdUserResult.user.uid,
            username: userName.toLowerCase(),
            fullName,
            emailAddress: emailAddress.toLowerCase(),
            following: ["bmxcUk2TvAYrbmvPisqMr8stjFG2"],
            dateCreated: Date.now(),
          });
        console.log(firebase);
        history.push(ROUTES.DASHBOARD);
      } catch (error) {
        setFullName("");
        setPassword("");
        setEmailAddress("");
        setUserName("");
      }
    } else {
      setError("Username is already taken, please try another.");
    }
  };

  useEffect(() => {
    document.title = "SignUp - Instagram";
  });
  return (
    <>
      <Wrapper>
        <LogoImg src={Logo}></LogoImg>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <LoginForm onSubmit={handleSignUp} method="POST">
          <input
            aria-label="Enter full name"
            type="text"
            placeholder="Full Name"
            onChange={({ target }) => setFullName(target.value.toString())}
            value={fullName}
          />
          <input
            aria-label="Enter Username"
            type="text"
            placeholder="Username"
            onChange={({ target }) => setUserName(target.value.toString())}
            value={userName}
          />
          <input
            aria-label="Enter your email address"
            type="text"
            placeholder="Email address"
            onChange={({ target }) => setEmailAddress(target.value.toString())}
            value={emailAddress}
          />
          <input
            aria-label="Enter your password"
            type="password"
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)}
            value={password}
          />
          <SubmitButton disabled={isInvalid} type="submit">
            Sign Up
          </SubmitButton>
        </LoginForm>
      </Wrapper>

      <Bottom>
        <div>Have an Account?</div> <Link to={ROUTES.LOGIN}>Log In</Link>
      </Bottom>
    </>
  );
};

export default SignUpPage;
