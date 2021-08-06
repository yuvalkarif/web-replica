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
import useAuthListener from "./hooks/use-auth-listener";
import UserContext from "./Context/user";

import ProtectedRoute from "./helpers/protected.routes";
import IsUserLoggedIn from "./helpers/is-user-logged-in";

const Login = lazy(() => import("./Components/LoginPage"));
const SignUp = lazy(() => import("./Components/SignUpPage"));
const NotFound = lazy(() => import("./Components/NotFoundPage"));
const Dashboard = lazy(() => import("./Components/DashboardPage"));

function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading</p>}>
          <Switch>
            <IsUserLoggedIn
              user={user}
              loggedInPath={ROUTES.DASHBOARD}
              path={ROUTES.LOGIN}
            >
              <Login />
            </IsUserLoggedIn>
            <IsUserLoggedIn
              user={user}
              loggedInPath={ROUTES.DASHBOARD}
              path={ROUTES.SIGNUP}
            >
              <SignUp />
            </IsUserLoggedIn>

            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </ProtectedRoute>
            <Route path={ROUTES.PROFILE} component={Profile} />
            <Route component={NotFound} />
            <Post></Post>
            <Profile></Profile>
            <Header profile={profile} profilePic={profile.profilePic}></Header>
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
