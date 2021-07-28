import React from "react";
import { Wrapper, Info, Title, Details, Description } from "./Header.styles";
const Header = ({ userProfile }) => {
  return (
    <Wrapper id={"Header"}>
      <img src={userProfile.profilePic} alt="profile pic" />
      <Info>
        <Title>{userProfile.name}</Title>
        <Details>
          <div>
            <span>{userProfile.posts.length}</span> posts
          </div>
          <div>
            <span>{userProfile.followers.length}</span> followers
          </div>
          <div>
            <span>{userProfile.following.length}</span> following
          </div>
        </Details>
        <Description>
          {userProfile.description.map((text, i) => {
            return i === 0 ? <h1 key={i}>{text}</h1> : <p key={i}>{text}</p>;
          })}
        </Description>
      </Info>
    </Wrapper>
  );
};

export default Header;
