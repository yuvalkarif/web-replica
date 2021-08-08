import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.div`
  font-weight: 500;
  font-size: 0.8rem;
  color: var(--darkColor);
  border-top: 2px solid var(--darkColor);
  padding: 0 1rem;
  padding-top: 0.5rem;
`;

export const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0;
`;

export const Post = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
  justify-content: center;
  padding: 1rem 0rem;
  margin-inline: 1rem;
  flex: 0 0 33.333333%;
  position: relative;
  /* ::before {
    content: "x";
    position: absolute;
    bottom: 50%;
  } */

  img {
    cursor: pointer;
    width: 256px;

    :hover {
      opacity: 70%;
    }
  }
`;
