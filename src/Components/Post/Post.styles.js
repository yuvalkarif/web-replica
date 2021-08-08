import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1080px;
  border: 1.5px solid var(--lightColor);
  background-color: white;
  margin-top: 2rem;
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 60% 1fr 1fr;
  gap: 0px 0px;
`;
export const Block = styled.div`
  display: flex;
  text-align: center;
  padding: 1rem;
  flex-direction: column;
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
  width: 44px;
  height: 44px;

  overflow: hidden;
  border-radius: 100%;
`;

export const Description = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1.5px solid var(--lightColor);
  text-align: center;
  h1 {
    margin-top: 0.75rem;
    margin-left: 1rem;
    font-size: 0.85rem;
    font-weight: 500;
    margin-right: 0.8rem;
  }
  div {
    margin-top: 0.75rem;
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
  display: flex;
  align-items: center;
`;
export const Comment = styled.div`
  padding: 1rem;
  color: var(--mediumColor);
`;

export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  a {
    text-decoration: none;
    display: flex;
    color: inherit;
  }
`;
export const SkeletonWrapper = styled.div`
  span {
    margin-block: 0.5rem;
  }
`;
