import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1080px;
  width: 90%;
  border: 1.5px solid var(--lightColor);
  background-color: white;
  margin-top: 2rem;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0 1rem;
  flex-direction: column;
  margin: 1rem 0;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;

  padding: 1rem;
  border-bottom: 1.5px solid var(--lightColor);
  h1 {
    margin-left: 1rem;
    font-size: 0.85rem;
    font-weight: 500;
  }
`;

export const MiniPic = styled.img`
  max-width: 44px;
  max-height: 44px;

  overflow: hidden;
  border-radius: 100%;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;

  border-bottom: 1.5px solid var(--lightColor);

  h1 {
    margin-top: 0.75rem;
    margin-left: 1rem;
    font-size: 0.85rem;
    font-weight: 500;
    margin-right: 0.8rem;
  }
  div {
    font-size: 0.85rem;
    font-weight: 400;
  }
`;
export const Utility = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-bottom: 1.5px solid var(--lightColor);
  div {
    margin-right: 1rem;
  }
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;

export const DateWrapper = styled.div`
  color: var(--mediumColor);
  margin-left: 0.75rem;
  font-size: 0.85rem;
`;
export const Comment = styled.div`
  padding: 1rem;
  color: var(--mediumColor);
`;

export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  margin: 0.5em 0;
  a {
    text-decoration: none;
    display: flex;
    color: inherit;
  }
  div {
    color: var(--darkColor);
    padding-top: 1em;
  }
`;
export const SkeletonWrapper = styled.div`
  span {
    margin-block: 0.5rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;

  div {
    font-weight: 400;
    margin-left: 0.5rem;
    color: var(--darkColor);
  }
`;
