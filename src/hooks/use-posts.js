import { useState, useEffect } from "react";
import { getUserByUsername, getPostsByUserId } from "../services/firebase";
//

export default function usePosts(username) {
  const [photos, setPhotos] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    async function getUser() {
      const result = await getUserByUsername(username);
      if (result.length >> 0) {
        setUser(result[0]);
        getPhotos(result[0]);
      } else {
        setUser(null);
      }
    }
    async function getPhotos(currentUser) {
      const result = await getPostsByUserId(currentUser.userId);
      setPhotos(result);
    }

    getUser();
  }, [username]);
  console.log(user);
  return { photos, user };
}
