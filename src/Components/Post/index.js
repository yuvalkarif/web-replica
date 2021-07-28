import React from "react";
import { post1 as post } from "../Template/postTemplates";
import { initialProfile as profile } from "../Template/profileTemplate";
import {
  Wrapper,
  Content,
  Header,
  Description,
  MiniPic,
  Utility,
  Comment,
  Buttons,
  Date,
  Block,
} from "./Post.styles";
const Post = () => {
  return (
    <Wrapper>
      <img src={post.picture} alt="" />
      <Content>
        <Header>
          <MiniPic src={profile.profilePic} alt="" />
          <h1>{post.user}</h1>
        </Header>
        <Description>
          <Block>
            <MiniPic src={profile.profilePic} alt="" />
            <h1>{post.user}</h1>
            <div>{post.description}</div>
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
  );
};

export default Post;
