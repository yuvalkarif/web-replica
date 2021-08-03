import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import {
  Fullname,
  MiniProfile,
  Wrapper,
  Username,
  MiniPic,
  Follow,
} from "./SuggestedProfile.styles";
import ProfilePic from "./../Template/Photos/profile-pic.jpg";

const User = ({ username, fullName, docId, userId }) => {
  const [followed, setFollowed] = useState(false);
  return !followed ? (
    <Wrapper>
      {!username || !fullName ? (
        <Skeleton count={1} height={61}></Skeleton>
      ) : (
        <>
          <MiniProfile>
            <Link to={`/p/${username}`}>
              <MiniPic className="img" src={ProfilePic} />
            </Link>

            <Username>{username}</Username>

            <Follow>Follow</Follow>
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
