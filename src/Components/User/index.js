import React, { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { Fullname, Grid, MiniProfile, Wrapper, Username } from "./User.styles";
import ProfilePic from "./../Template/Photos/profile-pic.jpg";
import { MiniPic } from "./User.styles";

const User = ({ username, fullName }) => {
  console.log({ username, fullName });
  return (
    <Wrapper>
      {!username || !fullName ? (
        <Skeleton count={1} height={61}></Skeleton>
      ) : (
        <Link to={`/p/${username}`}>
          <MiniProfile>
            <MiniPic className="img" src={ProfilePic} />
            <Username>{username}</Username>
            <Fullname>{fullName}</Fullname>
          </MiniProfile>
        </Link>
      )}
    </Wrapper>
  );
};

export default memo(User);

User.propTypes = {
  username: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
};
