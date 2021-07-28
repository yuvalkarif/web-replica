//User skeleton for making template page
import ProfilePic from "./Photos/profile-pic.jpg";
import { post1, post2 } from "./postTemplates";
export const initialProfile = {
  name: "yuval_karif",
  description: ["21 years old", "Full Stack Developer"],
  profilePic: ProfilePic,
  following: [
    "followingUser1",
    "followingUser2",
    "followingUser2",
    "followingUser2",
    "followingUser2",
  ],
  followers: ["followerUser3", "followerUser4"],
  posts: [post1, post2, post1, post2],
};
