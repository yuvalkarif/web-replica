import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 0.3rem;
`;

export const MiniProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;

  a {
    text-decoration: none;
    color: var(--darkColor);
    div {
      display: flex;
      align-items: center;
    }
  }
`;

export const MiniPic = styled.img`
  max-width: 35px;
  border-radius: 100%;
  margin-right: 0.5rem;
`;

export const Username = styled.div`
  font-weight: 500;
  font-size: 0.65rem;
  margin-right: 1.5rem;
`;
export const Fullname = styled.div`
  font-size: 0.5rem;
`;

export const Follow = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-size: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  color: var(--blueColor);
`;
