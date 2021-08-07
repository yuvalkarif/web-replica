import React from "react";
import Skeleton from "react-loading-skeleton";
import { Wrapper, Info, Title, Details, Description } from "./Header.styles";
const Header = ({ userProfile, user, photos }) => {
  return (
    <Wrapper id={"Header"}>
      {user?.profilePic ? (
        <img src={user.profilePic} alt="profile pic" />
      ) : (
        <Skeleton />
      )}
      <Info>
        <Title>
          {user ? (
            `${user.username}`
          ) : (
            <Skeleton
              width={148}
              height={148}
              circle={true}
              style={{ margin: "2rem 3rem" }}
            />
          )}
        </Title>
        <Details>
          <div>
            <span>{photos ? `${photos.length}` : <Skeleton width={10} />}</span>{" "}
            posts
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
          {user?.description ? (
            user.description.map((text, i) => {
              return i === 0 ? <h1 key={i}>{text}</h1> : <p key={i}>{text}</p>;
            })
          ) : (
            <Skeleton />
          )}
        </Description>
      </Info>
    </Wrapper>
  );
};

export default Header;
