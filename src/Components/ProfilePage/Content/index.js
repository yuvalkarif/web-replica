import React, { useState } from "react";
import { Wrapper, Menu, Posts, Post } from "./Content.styles";
import { Link } from "react-router-dom";

const Content = ({ userProfile }) => {
  const posts = userProfile.posts;
  return (
    <Wrapper>
      <Menu id={"Menu"}>
        <div>POSTS</div>
      </Menu>
      <Posts id={"Posts"}>
        {posts.map((post, i) => {
          return (
            <Post key={i} id={"Post"}>
              <Link to={`/posts/${i}`}>
                <img src={post.picture} alt={i}></img>
              </Link>
            </Post>
          );
        })}
      </Posts>
    </Wrapper>
  );
};

export default Content;
