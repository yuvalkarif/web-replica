import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1.5px solid var(--lightColor);
  padding-block: 2rem;
  margin: 0 auto;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      max-width: 148px;
      width: 100%;
      border-radius: 100%;
      aspect-ratio: 1/1;
    }
  }
`;
export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  padding-left: 2rem;
`;

export const Details = styled.div`
  display: flex;
  font-weight: 300;
  & > * {
    padding: 0.5rem 0;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-right: 1rem;

    span {
      font-weight: 400;
      text-align: center;
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

export const Button = styled.button`
  border: none;
  background: var(--blueColor);
  border-radius: 3px;
  padding: 0.2rem 1rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
