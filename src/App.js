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

  const [scores, setScores] = useState([]);
  const [pars, setPars] = useState([]);

  const addScoreAndPar = (score, par) => {
    const newScores = [...scores];
    newScores.push(score);
    setScores(newScores);
    const newPars = [...pars];
    newPars.push(par);
    setPars(newPars);
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
        <Route
          exact
          path="/score"
          render={props => (
            <Score {...props} scores={scores} addScoreAndPar={addScoreAndPar} />
          )}
        />
      </Router>
    </div>
  );
}

export default App;
