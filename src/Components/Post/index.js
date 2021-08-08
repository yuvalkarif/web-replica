import React, { useEffect, useState, useRef } from "react";
import { post1 as post } from "../Template/postTemplates";

import { useParams } from "react-router";
import {
  Wrapper,
  Content,
  Header as PostHeader,
  Description,
  MiniPic,
  Utility,
  Comment,
  Buttons,
  Block,
  CommentsWrapper,
  SkeletonWrapper,
  DateWrapper,
} from "./Post.styles";
import Header from "../Header";
import {
  getPhotoByPhotoId,
  getPhotos,
  getProfilePictureByName,
  getUserByUserId,
  getUserByUsername,
} from "../../services/firebase";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import DashPostActions from "../DashPost/actions";
import { formatDistance } from "date-fns";
import AddComment from "../DashPost/add-comment";
const Post = () => {
  const { photoId } = useParams();
  const [photo, setPhoto] = useState(null);
  const [user, setUser] = useState(null);
  const [commentPhotos, setCommentPhotos] = useState([]);
  const commentInput = useRef(null);
  const handleFocus = () => commentInput.current.focus();

  useEffect(() => {
    async function getPhotoPost() {
      const [photoResult] = await getPhotoByPhotoId(photoId);
      setPhoto(photoResult);

      const [userResult] = await getUserByUserId(photoResult.userId);
      setUser(userResult);
      const commentPhotosArray = await Promise.all(
        photoResult.comments.map(async (comment) => {
          return await getProfilePictureByName(comment.displayName);
        })
      );
      setCommentPhotos(commentPhotosArray);
    }
    if (photoId) getPhotoPost();
  }, [photoId]);

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
            {user ? (
              <Link to={`/p/${user.username}`}>
                <MiniPic src={user.profilePic} alt="" />
              </Link>
            ) : (
              <Skeleton width={44} height={44} circle={true} />
            )}
            <h1>
              {user ? user.username : <Skeleton width={150} height={17} />}
            </h1>
          </PostHeader>
          <Description>
            <Block>
              {photo && user ? (
                photo.comments.map((comment, i) => {
                  return (
                    <CommentsWrapper>
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
              posted={photo.dateCreated}
            />
          ) : null}
          {photo ? (
            <DateWrapper>
              {formatDistance(photo.dateCreated, new Date()).toUpperCase()}
            </DateWrapper>
          ) : (
            <Skeleton />
          )}
          {photo ? (
            <AddComment
              docId={photo.docId}
              comments={photo.comments}
              commentInput={commentInput}
            />
          ) : null}
        </Content>
      </Wrapper>
    </>
  );
};

export default Post;
