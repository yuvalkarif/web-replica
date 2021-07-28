import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//Components
import Profile from "./Components/Profile";
import Post from "./Components/Post";
//Root CSS
import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
        {/* <Profile></Profile> */}
        <Post></Post>
      </div>
    </Router>
  );
}

export default App;
