import React, { useEffect } from "react";
import { Wrapper } from "./NotFoundPage.styles";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Not Found";
  });
  return (
    <Wrapper>
      <div>Not Found</div>
    </Wrapper>
  );
};

export default NotFoundPage;
