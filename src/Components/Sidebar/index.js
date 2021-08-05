import React from "react";
import useUser from "../../hooks/use-user";
import User from "../User";
import Suggestions from "../Suggestions";
import { Wrapper } from "./Sidebar.styles";
const Sidebar = () => {
  const {
    user: { fullName, username, userId, following, docId },
  } = useUser();

  return (
    <Wrapper>
      <User username={username} fullName={fullName} />
      <Suggestions
        userId={userId}
        following={following}
        loggedInUserDocId={docId}
      />
    </Wrapper>
  );
};

export default Sidebar;
