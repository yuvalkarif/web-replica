import { firebase, FieldValue } from "../Lib/firebase";

export async function doesUserNameExist(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.map((user) => user.data().length > 0);
}

export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();
  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
  return user;
}
export async function getUserByUsername(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();
  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
  return user;
}

export async function getSuggestions(userId, following) {
  const results = await firebase
    .firestore()
    .collection("users")
    .where("userId", "!=", userId)
    .limit(10)
    .get();

  return results.docs
    .map((user) => ({ ...user.data(), docId: user.id }))
    .filter((profile) => profile.userId && !following.includes(profile.userId));
}

export async function updateLoggedInUserFollowing(
  loggedInUserDocId,
  profileId,
  isFollowingProfile
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(loggedInUserDocId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(profileId)
        : FieldValue.arrayUnion(profileId),
    });
}
export async function updateFollowedUserFollowers(
  profileDocId,
  loggedInUserDocId,
  isFollowingProfile
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(profileDocId)
    .update({
      followers: isFollowingProfile
        ? FieldValue.arrayRemove(loggedInUserDocId)
        : FieldValue.arrayUnion(loggedInUserDocId),
    });
}

export async function getPhotos(userId, following) {
  const result = await firebase
    .firestore()
    .collection("photos")
    .where("userId", "in", following)
    .get();
  const userFollowedPhotos = result.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id,
  }));
  const photosWithUserDetails = await Promise.all(
    userFollowedPhotos.map(async (photo) => {
      let userLikedPhoto = false;
      if (photo.likes.includes(userId)) {
        userLikedPhoto = true;
      }
      const user = await getUserByUserId(photo.userId);
      const { username } = user[0];
      return { username, ...photo, userLikedPhoto };
    })
  );
  return photosWithUserDetails;
}

export async function getPostsByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("photos")
    .where("userId", "==", userId)
    .get();

  return result.docs.map((photo) => photo.data());
}

export async function getPhotoByPhotoId(photoId) {
  const result = await firebase
    .firestore()
    .collection("photos")
    .where("photoId", "==", photoId)
    .get();

  return result.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id,
  }));
}

export async function getProfilePictureByName(displayName) {
  const [result] = await getUserByUsername(displayName);
  console.log("result", result);

  return result?.profilePic;
}

export function getLikedPhoto(photo, userId) {
  let userLikedPhoto = false;
  if (photo.likes.includes(userId)) {
    userLikedPhoto = true;
  }
  const newPhoto = { ...photo, userLikedPhoto: userLikedPhoto };

  return newPhoto;
}

export async function getUserWithDocId(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();

  const [user] = result.docs.map((user) => ({
    ...user.data(),
    docId: user.id,
  }));

  return user;
}
