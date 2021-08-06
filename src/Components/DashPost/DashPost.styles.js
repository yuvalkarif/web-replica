import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 600px;

  a {
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: row;
    font-size: 0.65rem;
    padding-block: 0.75rem;
    padding-left: 0.5rem;
  }
`;
export const MiniPic = styled.img`
  width: 25px;
  border-radius: 100%;
`;
export const PostPic = styled.img`
  width: 600px;
`;
export const HeaderTitle = styled.div`
  margin-block: auto;
  margin-left: 0.5rem;
  font-weight: 500;
  font-size: 0.725rem;
`;

export const PostWrapper = styled.div`
  border: 1px solid var(--lightColor);
  margin-bottom: 3rem;
`;
export const ActionWrapper = styled.div`
  padding: 0.6rem;
`;

export const Heart = styled.svg`
  width: 2rem;
  user-select: none;
  cursor: pointer;
  fill: ${(props) => (props.toggleLiked ? "red" : "none")};
  stroke: ${(props) => (props.toggleLiked ? "red" : "var(--darkColor);")};
  margin-right: 0.5rem;
`;
export const Comment = styled.svg`
  width: 2rem;
  user-select: none;
  cursor: pointer;
  stroke: var(--darkColor);
`;

export const Likes = styled.div`
  font-size: 0.8rem;
  padding-left: 0.2rem;
  font-weight: 500;
  color: var(--darkColor);
`;

export const FooterWrapper = styled.div`
  font-size: 0.8rem;
  padding-left: 0.8rem;
  font-weight: 400;
  color: var(--darkColor);
  span:first-child {
    font-weight: 500;
    margin-right: 0.5rem;
  }
`;

export const CommentsTitle = styled.div`
  color: var(--mediumColor);
  font-size: 0.8rem;
  padding-left: 0.8rem;
  margin-top: 0.35rem;
  cursor: pointer;
`;
export const CommentsName = styled.div`
  display: flex;
  margin-top: 0.35rem;
  a {
    font-weight: 500;

    text-decoration: none;
    color: var(--darkColor);
    font-size: 0.8rem;
    padding-left: 0.8rem;

    cursor: pointer;
  }
`;

export const CommentsText = styled.div`
  font-size: 0.8rem;
  padding-left: 0.35rem;
  font-weight: 400;
  color: var(--darkColor);
`;

export const PostDate = styled.div`
  font-size: 0.65rem;
  padding-left: 0.8rem;
  font-weight: 400;
  color: var(--mediumColor);
  margin-block: 0.5rem;
`;

export const AddCommentBox = styled.div`
  border-top: 1px solid var(--lightColor);
  background-color: white;

  form {
    display: flex;
    justify-content: space-between;
    padding-left: 0;

    input {
      border: none;
      padding: 1.1rem 1rem;
      width: 100%;
      color: var(--darkColor);
      outline: none;
    }
  }
`;

export const CommentButton = styled.button`
  border: none;
  background: white;
  font-weight: 600;
  color: var(--blueColor);
  padding-inline: 1rem;
  cursor: pointer;
  opacity: ${(props) => (props.comment ? "1" : "0.25")}; ;
`;
