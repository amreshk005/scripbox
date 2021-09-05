import "./App.css";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../src/utils/PrivateRoute";
import { useEffect } from "react";
import { data } from "../src/assets/data";

function App() {
  useEffect(() => {
    let { challenges, users } = data;
    localStorage.setItem("challenges", JSON.stringify(challenges));
    localStorage.setItem("users", JSON.stringify(users));
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/" />
      </Switch>
    </div>
  );
}

export default App;
