import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route path={ROUTES.BROWSE}>
        <Browse />
      </Route>
      <Route path={ROUTES.SIGN_IN}>
        <Signin />
      </Route>
      <Route path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>
    </Router>
  );
}

export default App;
