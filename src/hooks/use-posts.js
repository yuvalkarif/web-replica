import { set } from "date-fns";
import { useState, useEffect } from "react";
import { getUserByUsername, getPostsByUserId } from "../services/firebase";
//

export default function usePosts(username) {
  const [photos, setPhotos] = useState(null);
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState(false);
  useEffect(() => {
    async function getUser() {
      const result = await getUserByUsername(username);
      setUser(result[0]);
      getPhotos(result[0]);
    }
    async function getPhotos(currentUser) {
      const result = await getPostsByUserId(currentUser.userId);
      setPhotos(result);
    }

    getUser();
  }, [username]);

  return { photos, user };
}
