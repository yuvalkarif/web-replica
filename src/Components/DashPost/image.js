import PropTypes from "prop-types";
import { PostPic } from "./DashPost.styles";
export default function DashPostImage({ src, caption }) {
  return <PostPic src={src} alt={caption} />;
}

DashPostImage.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
