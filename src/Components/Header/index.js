import React, { useContext } from "react";
import {
  Search,
  Wrapper,
  Navbar,
  MiniPic,
  MiniLogo,
  Button,
} from "./Header.styles";
import Logo from "./photos/Karifgram.png";
import { Link } from "react-router-dom";
import FirebaseContext from "../../Context/firebase";
import UserContext from "../../Context/user";
import * as ROUTES from "../../constants/routes";
import ProfilePic from "./../Template/Photos/profile-pic.jpg";
export const Header = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  console.log({ user });

  return (
    <Wrapper>
      <Link to={ROUTES.DASHBOARD}>
        <MiniLogo src={Logo} alt="" />
      </Link>
      <Search>
        <input value="Search"></input>
      </Search>
      <Navbar>
        {user ? (
          <>
            <Link to={ROUTES.DASHBOARD}>
              <Button
                onClick={() => {
                  firebase.auth().signOut();
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    firebase.auth().signOut();
                  }
                }}
              >
                Sign Out
              </Button>
            </Link>
            <Link to={`/p/${user.displayName}`}>
              <MiniPic src={ProfilePic}></MiniPic>
            </Link>
          </>
        ) : (
          <>
            <Link to={ROUTES.LOGIN}>
              <Button>Login</Button>
              <Link to={ROUTES.SIGNUP}>
                <Button
                  onClick={() => {
                    firebase.auth().signOut();
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      firebase.auth().signOut();
                    }
                  }}
                >
                  Sign Up
                </Button>
              </Link>
            </Link>
          </>
        )}
      </Navbar>
    </Wrapper>
  );
};

export default Header;
