import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { LoginPage } from "./LoginPage/LoginPage";
import { history } from "./_helpers";
import { alertActions } from "./_actions";
import { HomePage } from "./HomePage";
import { PrivateRoute } from "./_components";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path="/">
          <HomePage />
        </PrivateRoute>
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
};

const connectedApp = connect(mapState, actionCreators)(App);

export { connectedApp as App };
