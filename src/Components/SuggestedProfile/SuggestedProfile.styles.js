import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 0.3rem;
  a {
    width: 30px;
    margin-block: auto;
  }
  width: 150px;
`;
export const Grid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
`;

export const MiniProfile = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "img ."
    "img .";

  .img {
    grid-area: img;
  }
  a {
    text-decoration: none;
    color: var(--darkColor);
    div {
      display: flex;
    }
  }
`;

export const MiniPic = styled.img`
  width: 30px;
  border-radius: 100%;
  margin: auto;
`;

export const Username = styled.div`
  margin-block: auto;

  font-weight: 500;
  font-size: 0.5rem;
  margin-left: 0.5rem;
`;
export const Fullname = styled.div`
  margin-block: auto;

  font-size: 0.5rem;
  width: 100%;
`;

export const Follow = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-size: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  color: var(--blueColor);
  text-align: end;
`;
