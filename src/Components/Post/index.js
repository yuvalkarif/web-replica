import React, { useEffect, useState, useRef, useContext } from "react";

import { useParams } from "react-router";
import {
  Wrapper,
  Content,
  Header as PostHeader,
  Description,
  MiniPic,
  Block,
  CommentsWrapper,
  SkeletonWrapper,
  DateWrapper,
  TitleWrapper,
} from "./Post.styles";
import Header from "../Header";
import {
  getLikedPhoto,
  getPhotoByPhotoId,
  getProfilePictureByName,
  getUserByUserId,
} from "../../services/firebase";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import DashPostActions from "../DashPost/actions";
import { formatDistance } from "date-fns";
import AddComment from "../DashPost/add-comment";
import UserContext from "../../Context/user";
const Post = () => {
  const { photoId } = useParams();
  const [photo, setPhoto] = useState(null);
  const [creator, setCreator] = useState(null);
  const [commentPhotos, setCommentPhotos] = useState([]);
  const [postComments, setPostComments] = useState([]);
  const commentInput = useRef(null);
  const handleFocus = () => commentInput.current.focus();

  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getPhotoPost() {
      const [photoResult] = await getPhotoByPhotoId(photoId);
      setPostComments(photoResult.comments);

      const [userResult] = await getUserByUserId(photoResult.userId);
      setCreator(userResult);

      const commentPhotosArray = await Promise.all(
        photoResult.comments.map(async (comment) => {
          return await getProfilePictureByName(comment.displayName);
        })
      );
      setCommentPhotos(commentPhotosArray);
      setPhoto(getLikedPhoto(photoResult, user.uid));
    }
    if (photoId) getPhotoPost();
  }, [photoId, user.uid]);

  return (
    <>
      <Header />
      <Wrapper>
        {photo ? (
          <img src={photo.imageSrc} alt="" />
        ) : (
          <Skeleton width={600} height={600} />
        )}
        <Content>
          <PostHeader>
            {creator ? (
              <Link to={`/p/${creator.username}`}>
                <MiniPic src={creator.profilePic} alt="" />
              </Link>
            ) : (
              <Skeleton width={44} height={44} circle={true} />
            )}
            <h1>
              {creator && photo ? (
                <TitleWrapper>
                  <span>{creator.username}</span>
                  <div>{photo.caption}</div>
                </TitleWrapper>
              ) : (
                <Skeleton width={150} height={17} />
              )}
            </h1>
          </PostHeader>
          <Description>
            <Block>
              {photo && creator ? (
                postComments.map((comment, i) => {
                  return (
                    <CommentsWrapper key={i}>
                      <Link to={`/p/${comment.displayName}`}>
                        {commentPhotos ? (
                          <MiniPic src={commentPhotos[i]} alt=""></MiniPic>
                        ) : (
                          <Skeleton width={44} height={44} />
                        )}
                        <h1>{comment.displayName}</h1>
                      </Link>
                      <div>{comment.comment}</div>
                    </CommentsWrapper>
                  );
                })
              ) : (
                <SkeletonWrapper>
                  <Skeleton width={410} height={44} count={5} />
                </SkeletonWrapper>
              )}
            </Block>
          </Description>

          {photo ? (
            <DashPostActions
              totalLikes={photo.likes.length}
              docId={photo.docId}
              likedPhoto={photo.userLikedPhoto}
              handleFocus={handleFocus}
            />
          ) : null}
          {photo ? (
            <DateWrapper>
              {formatDistance(photo.dateCreated, new Date()).toUpperCase()} AGO
            </DateWrapper>
          ) : (
            <Skeleton />
          )}
          {photo ? (
            <AddComment
              docId={photo.docId}
              comments={postComments}
              commentInput={commentInput}
              setComments={setPostComments}
            />
          ) : null}
        </Content>
      </Wrapper>
    </>
  );
};

export default Post;
