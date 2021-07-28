import React, { useState } from "react";
//Styled Components
import {
  Wrapper,
  Header,
  Info,
  Details,
  Title,
  Description,
} from "./Profile.styles";
//Data
import { initialProfile } from "../Template";

const Profile = () => {
  const [userProfile, setUserProfile] = useState(initialProfile);
  return (
    <Wrapper>
      <Header>
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
            <p>{userProfile.description[0]}</p>
            <p>{userProfile.description[1]}</p>
          </Description>
        </Info>
      </Header>
    </Wrapper>
  );
};

export default Profile;
