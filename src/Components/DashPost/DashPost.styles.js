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
`;

export const PostWrapper = styled.div`
  border: 1px solid var(--lightColor);
  margin-bottom: 3rem;
`;
export const ActionWrapper = styled.div`
  padding: 0.5rem;
`;

export const Heart = styled.svg`
  width: 2rem;
  user-select: none;
  cursor: pointer;
  fill: ${(props) => (props.toggleLiked ? "red" : "none")};
  stroke: ${(props) => (props.toggleLiked ? "red" : "black")};
  margin-right: 0.5rem;
`;
export const Comment = styled.svg`
  width: 2rem;
  user-select: none;
  cursor: pointer;
`;
