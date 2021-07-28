import React, { useState } from "react";
import { Switch, Router, Link } from "react-router";
//Components
import Header from "./Header";
import Content from "./Content";
//Styled Components
import { Wrapper } from "./Profile.styles";
//Data
import { initialProfile } from "../Template/profileTemplate";

const Profile = () => {
  const [userProfile, setUserProfile] = useState(initialProfile);
  return (
    <Wrapper id={"Profile"}>
      <Header userProfile={userProfile} />
      <Content userProfile={userProfile} />
    </Wrapper>
  );
};

export default Profile;
