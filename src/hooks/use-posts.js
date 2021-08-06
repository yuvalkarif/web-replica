import { set } from "date-fns";
import { useState, useEffect } from "react";
import { getUserByUsername, getPostsByUserId } from "../services/firebase";
//

export default function usePosts(username) {
  const [photos, setPhotos] = useState(null);
  const [user, setUser] = useState(null);
  const [first, setFirst] = useState(true);
  useEffect(() => {
    async function getUser() {
      const result = await getUserByUsername(username);
      setUser(result[0]);

      if (user) {
        getPhotos();
      }
    }
    async function getPhotos() {
      const result = await getPostsByUserId(user.userId);
      setPhotos(result);
    }
    getUser();
  }, [username]);

  return { photos, user };
}
