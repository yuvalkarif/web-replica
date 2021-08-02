import styled from "styled-components";

export const Wrapper = styled.div`
  a {
    text-decoration: none;
    color: inherit;
    font: inherit;
    font-size: 0.75rem;
  }
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
  grid-template-columns: 75% 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "img ."
    "img .";

  .img {
    grid-area: img;
  }
`;

export const MiniPic = styled.img`
  width: 50px;
  border-radius: 100%;
  margin: auto;
`;

export const Username = styled.div`
  margin-top: auto;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 0.6rem;
`;
export const Fullname = styled.div`
  margin-top: 0;
  margin-bottom: auto;
  font-size: 0.6rem;
`;
