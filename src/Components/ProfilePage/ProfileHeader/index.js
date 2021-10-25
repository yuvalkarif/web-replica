import React, { useState, useContext, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import UserContext from "../../../Context/user";
import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollowers,
  getUserByUserId,
} from "../../../services/firebase";
import {
  Wrapper,
  Info,
  Title,
  Details,
  Description,
  Button,
} from "./ProfileHeader.styles";
import PropTypes from "prop-types";
import { getUserWithDocId } from "../../../services/firebase";

const ProfileHeader = ({ user, photos }) => {
  const [followed, setFollowed] = useState(``);
  const { user: loggedInUser } = useContext(UserContext);
  const [updatedUser, setUpdatedUser] = useState(null);
  const [followerCount, setFollowerCount] = useState(null);
  const [isSameUser, setIsSameUser] = useState(true);

  async function handleFollowUser() {
    setFollowed((followed) => !followed);

    await updateLoggedInUserFollowing(updatedUser.docId, user.userId, followed);
    await updateFollowedUserFollowers(user.docId, loggedInUser.uid, followed);
    updateFollwers();
  }
  async function updateFollwers() {
    const [result] = await getUserByUserId(user.userId);
    setFollowerCount(result.followers.length);
  }
  useEffect(() => {
    async function updateUser() {
      user.userId === loggedInUser.uid
        ? setIsSameUser(true)
        : setIsSameUser(false);

      const result = await getUserWithDocId(loggedInUser.uid);
      setUpdatedUser(result);
      if (user.followers) {
        setFollowerCount(user.followers.length);
        setFollowed(user.followers.includes(loggedInUser.uid) ? true : false);
      } else {
        setFollowerCount(0);
      }
    }
    if (user && loggedInUser) {
      updateUser();
    }
  }, [loggedInUser, user]);

  return (
    <Wrapper id={"Header"}>
      <div>
        {user?.profilePic ? (
          <img src={user.profilePic} alt="profile pic" />
        ) : (
          <Skeleton
            width={148}
            height={148}
            circle={true}
            style={{ margin: "2rem 3rem" }}
          />
        )}
      </div>
      <Info>
        <Title>
          {user ? `${user.username}` : <Skeleton />}{" "}
          {isSameUser ? null : (
            <Button onClick={handleFollowUser}>
              {followed ? "Unfollow" : "Follow"}
            </Button>
          )}
        </Title>
        <Details>
          <div>
            <span>{photos ? `${photos.length}` : <Skeleton width={10} />}</span>{" "}
            posts
          </div>
          <div>
            <span>{user ? `${followerCount}` : <Skeleton width={10} />}</span>{" "}
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
          {user?.description
            ? user.description.map((text, i) => {
                return i === 0 ? (
                  <h1 key={i}>{text}</h1>
                ) : (
                  <p key={i}>{text}</p>
                );
              })
            : null}
        </Description>
      </Info>
    </Wrapper>
  );
};

export default ProfileHeader;

ProfileHeader.propTypes = {
  user: PropTypes.object,
  photos: PropTypes.array,
};
