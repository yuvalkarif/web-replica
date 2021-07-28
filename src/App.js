import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//Components
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Post from "./Components/Post";
//Data
import { initialProfile as profile } from "./Components/Template/profileTemplate";
//Root CSS
import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Header profile={profile} profilePic={profile.profilePic}></Header>
        <Profile></Profile>
        <Post></Post>
      </div>
    </Router>
  );
}

export default App;
