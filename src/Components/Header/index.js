import React from "react";
import { Search, Wrapper, Navbar, MiniPic, MiniLogo } from "./Header.styles";
import Logo from "./photos/Karifgram.png";
import { Link } from "react-router-dom";
export const Header = ({ profilePic, profile }) => {
  return (
    <Wrapper>
      <Link to={`/`}>
        <MiniLogo src={Logo} alt="" />
      </Link>
      <Search>
        <input value="Search"></input>
      </Search>
      <Navbar>
        <Link to={`/${profile.name}`}>
          <MiniPic src={profilePic}></MiniPic>
        </Link>
      </Navbar>
    </Wrapper>
  );
};

export default Header;
