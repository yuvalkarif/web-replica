import React from "react";
import useUser from "../../hooks/use-user";
import User from "../User";
import Suggestions from "../Suggestions";
const Sidebar = () => {
  const {
    user: { fullName, username, userId, following, docId },
  } = useUser();

  return (
    <div>
      <User username={username} fullName={fullName} />
      <Suggestions
        userId={userId}
        following={following}
        loggedInUserDocId={docId}
      />
    </div>
  );
};

export default Sidebar;
