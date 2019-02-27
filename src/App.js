import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/projects/:id" component={ProjectDetails} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
