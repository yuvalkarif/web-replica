import React, { useEffect } from "react";
import { Redirect, useParams } from "react-router";
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
      {user !== null ? (
        <>
          <Header />
          <Wrapper id={"Profile"}>
            <ProfileHeader user={user} photos={photos} />
            <Content photos={photos} />
          </Wrapper>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default ProfilePage;
