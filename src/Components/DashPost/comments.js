import { useState } from "react";
import PropTypes from "prop-types";
import { formatDistance } from "date-fns";
import {
  CommentsName,
  CommentsText,
  CommentsTitle,
  PostDate,
} from "./DashPost.styles";
import { Link } from "react-router-dom";
import AddComment from "./add-comment";
export default function DashPostComments({
  docId,
  comments: allComments,
  posted,
  commentInput,
}) {
  const [comments, setComments] = useState(allComments);

  return (
    <>
      <div>
        {comments.length >= 3 && (
          <CommentsTitle>View all {comments.length} comments</CommentsTitle>
        )}
        {comments.slice(0, 3).map((item) => (
          <CommentsName key={`${item.comment}-${item.displayName}`}>
            <Link to={`/p/${item.displayName}`}>
              <span>{item.displayName}</span>
            </Link>
            <CommentsText>{item.comment}</CommentsText>
          </CommentsName>
        ))}
        <PostDate>
          {formatDistance(posted, new Date()).toUpperCase()} AGO
        </PostDate>
      </div>
      <AddComment
        docId={docId}
        comments={comments}
        setComments={setComments}
        commentInput={commentInput}
      />
    </>
  );
}

DashPostComments.propTypes = {
  docId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  posted: PropTypes.number.isRequired,
  commentInput: PropTypes.object.isRequired,
};
