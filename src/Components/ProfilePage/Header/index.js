import React from "react";
import Skeleton from "react-loading-skeleton";
import { Wrapper, Info, Title, Details, Description } from "./Header.styles";
const Header = ({ userProfile, user, photos }) => {
  return (
    <Wrapper id={"Header"}>
      <img src={userProfile.profilePic} alt="profile pic" />
      <Info>
        <Title>{user ? `${user.username}` : <Skeleton />}</Title>
        <Details>
          <div>
            <span>{photos ? `${photos}` : <Skeleton width={10} />}</span> posts
          </div>
          <div>
            <span>
              {user ? `${user.followers.length}` : <Skeleton width={10} />}
            </span>{" "}
            followers
          </div>
          <div>
            <span>
              {user ? `${user.following.length}` : <Skeleton width={10} />}
            </span>{" "}
            following
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
