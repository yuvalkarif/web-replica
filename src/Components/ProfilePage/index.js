import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
//Components
import ProfileHeader from "./ProfileHeader";
import Content from "./Content";
//Styled Components
import { Wrapper } from "./Profile.styles";
//Data

import usePosts from "../../hooks/use-posts";
import Header from "../Header";

const ProfilePage = () => {
  const { username } = useParams();
  const { photos, user } = usePosts(username);
  useEffect(() => {
    if (user) {
      document.title = `${user.fullName} (@${user.username})`;
    }
  });
  return (
    <>
      <Header />
      <Wrapper id={"Profile"}>
        <ProfileHeader user={user} photos={photos} />
        <Content photos={photos} />
      </Wrapper>
    </>
  );
};

export default ProfilePage;
