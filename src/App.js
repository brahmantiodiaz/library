import React, { Component } from "react";
import Header from "./components/Header";
import axios from "axios";
import Routes from "./routes";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container" style={{ paddingTop: '84px', paddingBottom: '24px' }}>
          <Routes />
        </div>{" "}
      </div>
    );
  }
}

export default App;
