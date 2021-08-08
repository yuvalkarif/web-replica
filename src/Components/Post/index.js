import React, { useEffect, useState } from "react";
import { post1 as post } from "../Template/postTemplates";
import { initialProfile as profile } from "../Template/profileTemplate";
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
  Date,
  Block,
  CommentsWrapper,
} from "./Post.styles";
import Header from "../Header";
import {
  getPhotoByPhotoId,
  getPhotos,
  getUserByUserId,
  getUserByUsername,
} from "../../services/firebase";
import Skeleton from "react-loading-skeleton";
const Post = () => {
  const { photoId } = useParams();
  const [photo, setPhoto] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function getPhotoPost() {
      const photoResult = await getPhotoByPhotoId(photoId);
      setPhoto(photoResult);
      const [userResult] = await getUserByUserId(photoResult.userId);
      setUser(userResult);
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
              <MiniPic src={user.profilePic} alt="" />
            ) : (
              <Skeleton width={44} height={44} circle={true} />
            )}
            <h1>
              {user ? user.username : <Skeleton width={150} height={17} />}
            </h1>
          </PostHeader>
          <Description>
            <Block>
              {photo ? (
                photo.comments.map((comment) => {
                  console.log(comment.displayName);
                  return (
                    <CommentsWrapper>
                      <MiniPic src={profile.profilePic} alt="" />
                      <h1>{comment.displayName}</h1>
                      <div>{comment.comment}</div>
                    </CommentsWrapper>
                  );
                })
              ) : (
                <Skeleton />
              )}
            </Block>
          </Description>
          <Utility>
            <Buttons>
              <div>LIKE</div>
              <div>COMMENT</div>
              <div>SAVE</div>
            </Buttons>
            <Date>{post.date}</Date>
          </Utility>
          <Comment>Add a comment...</Comment>
        </Content>
      </Wrapper>
    </>
  );
};

export default Post;
