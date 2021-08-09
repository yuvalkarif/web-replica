import React, { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { Fullname, MiniProfile, Wrapper, Username } from "./User.styles";

import { MiniPic } from "./User.styles";

const User = ({ username, fullName, profilePic }) => {
  return (
    <Wrapper>
      {!username || !fullName ? (
        <Skeleton count={1} height={61}></Skeleton>
      ) : (
        <Link to={`/p/${username}`}>
          <MiniProfile>
            <MiniPic src={profilePic} />
            <div>
              <Username>{username}</Username>
              <Fullname>{fullName}</Fullname>
            </div>
          </MiniProfile>
        </Link>
      )}
    </Wrapper>
  );
};
User.whyDidYouRender = true;
export default memo(User);

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
};
