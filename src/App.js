import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <div>
            <h1>good</h1>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
