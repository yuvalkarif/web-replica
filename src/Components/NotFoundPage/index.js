import React, { useEffect } from "react";
import { Wrapper } from "./NotFoundPage.styles";
import Header from "../Header/index";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Not Found";
  });
  return (
    <>
      <Header />
      <Wrapper>
        <div>Sorry, this page isn't available.</div>
      </Wrapper>
    </>
  );
};

export default NotFoundPage;
