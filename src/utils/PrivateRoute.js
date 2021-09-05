import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthedRoute from "./AuthedRoute";

const PrivateRoute = () => {
  return (
    <Route
      render={({ location }) =>
        localStorage.getItem("LoggedIn") ? (
          <AuthedRoute />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
