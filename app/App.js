import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About, Content1, Content2, Content3, Header } from "./components";

const Home = () => {
  return (
    <div>
      <h1> Home... </h1>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/content1">
            <Content1 />
          </Route>
          <Route path="/content2">
            <Content2 />
          </Route>
          <Route path="/content3">
            <Content3 />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
