import { Link } from "react-router-dom";
import { MiniPic, HeaderTitle, HeaderWrapper } from "./DashPost.styles";
import ProfilePic from "../Template/Photos/profile-pic.jpg";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getProfilePictureByName } from "../../services/firebase";
import Skeleton from "react-loading-skeleton";
export default function DashPostHeader({ username }) {
  const [profile, setProfile] = useState();
  useEffect(() => {
    async function getProfile() {
      const result = await getProfilePictureByName(username);
      setProfile(result);
    }
    getProfile();
  }, [username]);
  return (
    <HeaderWrapper>
      <Link to={`/p/${username}`}>
        {profile ? (
          <MiniPic src={profile} />
        ) : (
          <Skeleton width={25} height={25} circle={true} />
        )}
        <HeaderTitle>{username}</HeaderTitle>
      </Link>
    </HeaderWrapper>
  );
}

DashPostHeader.propTypes = {
  username: PropTypes.string,
};
