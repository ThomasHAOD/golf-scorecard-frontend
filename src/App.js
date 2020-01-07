import React from "react";
import Home from "./Components/Home";
import Holes from "./Components/Holes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/holes" component={Holes} />
      </Router>
    </div>
  );
}

export default App;
