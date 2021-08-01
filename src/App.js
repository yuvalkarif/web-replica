import React, { Suspense } from "react";
import { lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Post from "./Components/Post";
//Data
import { initialProfile as profile } from "./Components/Template/profileTemplate";
//Root CSS
import "./App.css";
//Consts
import * as ROUTES from "./constants/routes";

const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/signup"));
function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGNUP} component={SignUp} />
          <Post></Post>
          <Profile></Profile>
          <Header profile={profile} profilePic={profile.profilePic}></Header>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
