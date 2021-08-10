import React, { useRef } from "react";
import PropTypes from "prop-types";
import DashPostHeader from "./header";
import { PostWrapper } from "./DashPost.styles";
import DashPostImage from "./image";
import DashPostActions from "./actions";
import DashPostFooter from "./footer";
import DashPostComments from "./comments";
import { Link } from "react-router-dom";

const DashPost = ({ content }) => {
  const commentInput = useRef(null);
  const handleFocus = () => commentInput.current.focus();
  return (
    <PostWrapper>
      <DashPostHeader username={content.username} />
      <Link to={`web-replica/post/${content.photoId}`}>
        <DashPostImage src={content.imageSrc} caption={content.caption} />
      </Link>
      <DashPostActions
        docId={content.docId}
        totalLikes={content.likes.length}
        likedPhoto={content.userLikedPhoto}
        handleFocus={handleFocus}
      />
      <DashPostFooter caption={content.caption} username={content.username} />
      <DashPostComments
        docId={content.docId}
        comments={content.comments}
        posted={content.dateCreated}
        commentInput={commentInput}
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
    dateCreated: PropTypes.number.isRequired,
  }),
};

export default DashPost;
