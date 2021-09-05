import React from "react";
import { Route } from "react-router-dom";
import AddQuestions from "../components/AddQuestions";
import Home from "../components/Home";

function AuthedRoute() {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/addquestion">
        <AddQuestions />
      </Route>
    </div>
  );
}

export default AuthedRoute;
