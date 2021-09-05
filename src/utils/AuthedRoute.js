import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home";

function AuthedRoute() {
  return (
    <div>
      <Route path="/">
        <Home />
      </Route>
    </div>
  );
}

export default AuthedRoute;
