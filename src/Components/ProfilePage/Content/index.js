import { Wrapper, Menu, Posts, Post } from "./Content.styles";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Skeleton from "react-loading-skeleton";

const Content = ({ photos }) => {
  return (
    <>
      <Wrapper>
        <Menu id={"Menu"}>
          <div>POSTS</div>
        </Menu>
        <Posts id={"Posts"}>
          {photos ? (
            photos.map((photo) => {
              return (
                <Post key={`${photo.photoId}`}>
                  <Link to={`/web-replica/post/${photo.photoId}`}>
                    <img src={photo.imageSrc} alt={photo.photoId}></img>
                  </Link>
                </Post>
              );
            })
          ) : (
            <Skeleton
              count={3}
              width={202}
              height={202}
              style={{ margin: "1rem" }}
            />
          )}
        </Posts>
      </Wrapper>
    </>
  );
};

export default Content;

Content.propTypes = {
  photos: PropTypes.array,
};
