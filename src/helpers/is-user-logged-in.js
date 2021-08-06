import PropTypes from "prop-types";
import { Route, Redirect } from "react-router";

// import * as ROUTES from "../constants/routes";

export default function IsUserLoggedIn({
  user,
  children,
  loggedInPath,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!user) {
          return children;
        }
        if (user) {
          return (
            <Redirect
              to={{ pathname: loggedInPath, state: { from: location } }}
            />
          );
        }
        return null;
      }}
    />
  );
}

IsUserLoggedIn.propTypes = {
  user: PropTypes.object,
  children: PropTypes.object.isRequired,
  loggedInPath: PropTypes.string.isRequired,
};
