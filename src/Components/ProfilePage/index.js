import React, { useState, useEffect } from "react";
import { Switch, Router, Link, useParams } from "react-router";
//Components
import Header from "./Header";
import Content from "./Content";
//Styled Components
import { Wrapper } from "./Profile.styles";
//Data
import { initialProfile } from "../Template/profileTemplate";
import { getPostsByUserId, getUserByUsername } from "../../services/firebase";

import usePosts from "../../hooks/use-posts";

const ProfilePage = () => {
  const [userProfile, setUserProfile] = useState(initialProfile);
  // const [user, setUser] = useState();
  // const [photos, setPhotos] = useState();
  const [first, setFirst] = useState(true);
  const { username } = useParams();
  const { photos, user } = usePosts(username);
  // useEffect(() => {
  //   async function getUser() {
  //     const result = await getUserByUsername(username);
  //     setUser(result[0]);
  //   }
  //   async function getPhotos() {
  //     const { result } = await getPostsByUserId(user.userId);
  //     setPhotos(result);
  //     console.log(`photos`, photos);
  //   }
  //   if (username) {
  //     console.log(`user`, typeof user);
  //     getUser();
  //   }
  //   if (user && first) {
  //     getPhotos();
  //     setFirst(false);
  //   }
  // }, [username]);

  return (
    <>
      <Wrapper id={"Profile"}>
        <Header userProfile={userProfile} user={user} photos={photos} />
        <Content userProfile={userProfile} user={user} />
      </Wrapper>
    </>
  );
};

export default ProfilePage;
