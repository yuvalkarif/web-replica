import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2rem;
  border-bottom: 1.5px solid var(--lightColor);
  padding: 2rem 3rem;
  img {
    width: 148px;
    height: 148px;
    border-radius: 100%;
    aspect-ratio: 1/1;
  }
`;
export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;

  margin-left: 2rem;
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
  font-weight: 300;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  h1 {
    font-weight: 400;
    margin-bottom: 0.65rem;
    font-size: 1rem;
    margin-top: 0;
  }
  p {
    margin: 0;
  }
`;
