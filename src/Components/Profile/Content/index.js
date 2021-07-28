import React, { useState } from "react";
import { Wrapper, Menu, Posts, Post } from "./Content.styles";

const Content = ({ userProfile }) => {
  const posts = userProfile.posts;
  return (
    <Wrapper>
      <Menu>
        <div>POSTS</div>
      </Menu>
      <Posts>
        {posts.map((post, i) => {
          return (
            <Post>
              <img src={post.picture} alt={`${i}`}></img>
            </Post>
          );
        })}
      </Posts>
    </Wrapper>
  );
};

export default Content;
