import React, { useState, useEffect } from "react";
import { Switch, Router, Link, useParams } from "react-router";
//Components
import ProfileHeader from "./ProfileHeader";
import Content from "./Content";
//Styled Components
import { Wrapper } from "./Profile.styles";
//Data
import { initialProfile } from "../Template/profileTemplate";
import { getPostsByUserId, getUserByUsername } from "../../services/firebase";

import usePosts from "../../hooks/use-posts";
import Header from "../Header";

const ProfilePage = () => {
  // const [user, setUser] = useState();
  // const [photos, setPhotos] = useState();
  const [first, setFirst] = useState(true);
  const { username } = useParams();
  const { photos, user } = usePosts(username);
  if (user && photos) {
    console.log(user, photos);
  }

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
