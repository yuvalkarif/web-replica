import styled from "styled-components";
export const Wrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Menu = styled.div``;

export const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Post = styled.div`
  flex: 0 0 27%;
  padding-bottom: 0.5rem;
  align-self: center;
  img {
    width: 202px;
  }
`;
