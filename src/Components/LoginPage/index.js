import {
  Bottom,
  ErrorMessage,
  LoginForm,
  SubmitButton,
  Wrapper,
  OutlineButton,
} from "./LoginPage.styles";
import Logo from "./../Header/photos/Karifgram.png";
import { LogoImg } from "./LoginPage.styles";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import FirebaseContext from "../../Context/firebase";
import * as ROUTES from "../../constants/routes";
const LoginPage = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(``);
  const isInvalid = password === "" || emailAddress === "";
  const handleDemo = () => {
    setEmailAddress("karifgram@gmail.com");
    setPassword("karifgram");
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    loggingIn();
  };
  const loggingIn = async () => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress.toString(), password);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddress("");
      setPassword("");
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = "Login - Instagram";
  });
  return (
    <>
      <Wrapper>
        <LogoImg src={Logo}></LogoImg>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <LoginForm onSubmit={handleLogin} method="POST">
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
            Log In
          </SubmitButton>
          <OutlineButton type="button" onClick={handleDemo}>
            Demo
          </OutlineButton>
        </LoginForm>
      </Wrapper>

      <Bottom>
        <div>Don't have an account?</div>{" "}
        <Link to={ROUTES.SIGNUP}>Sign Up</Link>
      </Bottom>
    </>
  );
};

export default LoginPage;
