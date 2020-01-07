import React, { useState } from "react";
import Home from "./Components/Home";
import Holes from "./Components/Holes";
import Score from "./Components/Score";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [holes, setHoles] = useState(9);

  const setNumberOfHoles = number => {
    setHoles(number);
  };

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/holes"
          render={props => (
            <Holes {...props} setNumberOfHoles={setNumberOfHoles} />
          )}
        />
        <Route exact path="/score" render={props => <Score {...props} />} />
      </Router>
    </div>
  );
}

export default App;
