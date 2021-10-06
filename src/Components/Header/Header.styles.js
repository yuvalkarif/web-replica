import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  min-height: 3rem;
  align-items: center;
  a {
    display: flex;
  }
`;
export const MiniLogo = styled.img`
  height: 2rem;
  margin-left: 1rem;
  margin-top: 0.5rem;
`;

export const MiniPic = styled.img`
  height: 2.25rem;
  border-radius: 100%;
  margin-right: 0.5rem;
  :hover {
    opacity: 80%;
  }
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Button = styled.button`
  background-color: var(--blueColor);
  color: var(--bgColor);
  border: none;
  border-radius: 4px;
  font: inherit;
  font-weight: 500;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  cursor: pointer;
  text-decoration: none;
`;
