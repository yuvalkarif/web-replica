import { Link } from "react-router-dom";
import { MiniPic, HeaderTitle, HeaderWrapper } from "./DashPost.styles";
import ProfilePic from "../Template/Photos/profile-pic.jpg";
import PropTypes from "prop-types";

export default function DashPostHeader({ username }) {
  return (
    <HeaderWrapper>
      <Link to={`/p/${username}`}>
        <MiniPic src={ProfilePic} />
        <HeaderTitle>{username}</HeaderTitle>
      </Link>
    </HeaderWrapper>
  );
}

DashPostHeader.propTypes = {
  username: PropTypes.string,
};
