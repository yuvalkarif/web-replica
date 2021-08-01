import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 248px;
  border: 1.5px solid var(--lightColor);
  padding: 0 2.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-top: 8rem;
  padding-bottom: 1.5rem;
`;

export const LogoImg = styled.img`
  width: 156px;
  height: auto;
  margin: 2rem 0;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  width: 100%;
  input {
    color: var(--darkColor);
    background-color: var(--bgColor);
    border: 1.5px solid var(--lightColor);
    border-radius: 3px;
    padding: 0.35rem 0;
    margin-bottom: 0.5rem;
    width: 100%;
    padding-inline: 0.4rem;
  }
`;

export const SubmitButton = styled.button`
  background-color: var(--blueColor);
  color: var(--bgColor);
  border: none;
  border-radius: 4px;
  padding: 0.35rem 0;
  font-family: inherit;
  font-weight: 700;
  width: 106.5%;
  font-size: 0.9rem;
  opacity: ${(props) => (props.disabled ? "50%" : "100%")};
  cursor: ${(props) => (props.disabled ? "normal" : "pointer")};
  margin-top: 0.35rem;
`;

export const Bottom = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0 auto;
  width: 248px;
  border: 1.5px solid var(--lightColor);
  padding: 1rem 2.75rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-top: 2rem;
  a {
    text-decoration: none;
    color: var(--blueColor);
    margin-left: 0.35rem;
    font: inherit;
    font-weight: 500;
  }
`;
export const ErrorMessage = styled.div`
  color: red;
  font-size: 0.75rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;
