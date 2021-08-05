import React, { useContext, useEffect, useState } from "react";
import FirebaseContext from "../../Context/firebase";

import { FieldValue } from "../../Lib/firebase";
import { getUserByUserId } from "../../services/firebase";
import { firebase } from "../../Lib/firebase";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { getSuggestions } from "../../services/firebase";
import SuggestedProfile from "../SuggestedProfile";
import { Title, Wrapper } from "./Suggestions.styles";

const Suggestions = ({ userId, following, loggedInUserDocId }) => {
  const [profiles, setProfiles] = useState(null);
  // const { firebase } = useContext(FirebaseContext);

  // const dontSuggest = [...user.following, user.userId];
  // console.log({ dontSuggest });

  useEffect(() => {
    async function setSuggestions() {
      const suggestions = await getSuggestions(userId, following);
      setProfiles(suggestions);
    }
    if (userId) {
      setSuggestions();
    }
  }, [userId, following]);

  return !profiles ? (
    <Skeleton count={10} height={150} />
  ) : profiles.length > 0 ? (
    <Wrapper>
      <Title>Suggestions for you</Title>
      {profiles.map((profile) => {
        return (
          <SuggestedProfile
            username={profile.username}
            fullName={profile.fullName}
            key={profile.docId}
            profileDocId={profile.docId}
            profileId={profile.userId}
            userId={userId}
            loggedInUserDocId={loggedInUserDocId}
          ></SuggestedProfile>
        );
      })}
    </Wrapper>
  ) : null;
};

export default Suggestions;

Suggestions.propTypes = {
  loggedInUserId: PropTypes.string,
  username: PropTypes.string,
  docId: PropTypes.string,
  profileId: PropTypes.string,
};
