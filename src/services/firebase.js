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
