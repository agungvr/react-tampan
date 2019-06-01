import React, { lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import PropTypes from 'prop-types';
// import Home from "./home";

const Home = lazy(() => import("./home"));

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {};

export default App;
