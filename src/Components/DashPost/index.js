import React, { useRef } from "react";
import PropTypes from "prop-types";
import DashPostHeader from "./header";
import { PostWrapper } from "./DashPost.styles";
import DashPostImage from "./image";
import DashPostActions from "./actions";

const DashPost = ({ content }) => {
  const commentInput = useRef(null);
  const handleFocus = () => commentInput.current.handleFocus;
  return (
    <PostWrapper>
      <DashPostHeader username={content.username} />
      <DashPostImage src={content.imageSrc} caption={content.caption} />
      <DashPostActions
        docId={content.docId}
        totalLikes={content.likes.length}
        likedPhoto={content.userLikedPhoto}
        handleFocus={handleFocus}
      />
    </PostWrapper>
  );
};

DashPost.propTypes = {
  content: PropTypes.shape({
    username: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
    userLikedPhoto: PropTypes.bool.isRequired,
    likes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    updateCreated: PropTypes.number.isRequired,
  }),
};

export default DashPost;
