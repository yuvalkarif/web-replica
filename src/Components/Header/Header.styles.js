import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  margin: 0;
  display: grid;
  height: 3rem;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  border-bottom: 1.5px solid var(--lightColor);

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

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  input {
    text-align: center;
    color: var(--mediumColor);
    background-color: var(--bgColor);
    border: 1.5px solid var(--lightColor);
    border-radius: 5px;
  }
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
