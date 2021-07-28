import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--bgColor);
  max-width: 1280px;
  border-bottom: 2px solid var(--lightColor);
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 148px;
    border-radius: 100%;
    aspect-ratio: 1/1;
    padding: 2rem 3rem;
  }
`;
export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  margin: 1.5rem 0;
`;

export const Details = styled.div`
  display: flex;
  font-weight: 300;
  div {
    margin-right: 1rem;

    span {
      font-weight: 400;
    }
  }
`;
export const Title = styled.div`
  font-size: 1.5rem;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  p:first-child {
    font-weight: 400;
    margin-bottom: 1rem;
  }
  p {
    margin: 0;
  }
`;
