import PropTypes from "prop-types";
import { FooterWrapper } from "./DashPost.styles";
export default function DashPostFooter({ caption, username }) {
  return (
    <FooterWrapper>
      <span>{username}</span>
      <span>{caption}</span>
    </FooterWrapper>
  );
}

DashPostFooter.propTypes = {
  caption: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
