import React, { useContext, useState, useEffect } from "react";
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
import { getUserByUserId } from "../../services/firebase";
import Skeleton from "react-loading-skeleton";
export const Header = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  const [profilePic, setProfilePic] = useState();
  const [search, setSearch] = useState(``);

  useEffect(() => {
    async function getUserPic() {
      const result = await getUserByUserId(user.uid);

      setProfilePic(result[0].profilePic);
    }
    if (user?.uid) {
      getUserPic();
    }
  }, [user]);

  return (
    <Wrapper>
      <Link to={ROUTES.DASHBOARD}>
        <MiniLogo src={Logo} alt="" />
      </Link>
      <Search>
        <input
          placeholder="Search"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        ></input>
      </Search>
      <Navbar>
        {user ? (
          <>
            <Link to={ROUTES.DASHBOARD} style={{ textDecoration: "none" }}>
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
            <Link to={`/web-replica/p/${user.displayName}`}>
              {profilePic ? (
                <MiniPic src={profilePic}></MiniPic>
              ) : (
                <Skeleton height={36} width={36} circle={true} />
              )}
            </Link>
          </>
        ) : (
          <>
            <Link to={ROUTES.LOGIN}>
              <Button>Login</Button>
            </Link>
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
          </>
        )}
      </Navbar>
    </Wrapper>
  );
};

export default Header;
