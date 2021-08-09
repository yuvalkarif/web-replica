import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import {
  MiniProfile,
  Wrapper,
  Username,
  MiniPic,
  Follow,
} from "./SuggestedProfile.styles";

import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollowers,
} from "../../services/firebase";

const User = ({
  profileDocId,
  username,
  profileId,
  loggedInUserDocId,
  userId,
  profilePic,
}) => {
  const [followed, setFollowed] = useState(false);

  async function handleFollowUser() {
    setFollowed(true);
    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
    await updateFollowedUserFollowers(profileDocId, userId, false);
  }

  return !followed ? (
    <Wrapper>
      {!username ? (
        <Skeleton count={1} height={61}></Skeleton>
      ) : (
        <>
          <MiniProfile>
            <Link to={`/p/${username}`}>
              {profilePic ? (
                <MiniPic className="img" src={profilePic} />
              ) : (
                <Skeleton height={30} width={30} circle={true} />
              )}
            </Link>

            <Username>{username}</Username>

            <Follow onClick={handleFollowUser}>Follow</Follow>
          </MiniProfile>
        </>
      )}
    </Wrapper>
  ) : null;
};
export default memo(User);

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
};
