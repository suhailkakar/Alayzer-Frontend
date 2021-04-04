import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Lookup from "./Assets/Sections/Lookup";
import Main from "./Pages/Main";
export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/lookup">
            <Lookup />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
