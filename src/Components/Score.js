import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Score.css";

const Score = props => {
  const [par, setPar] = useState(3);
  const [strokes, setStrokes] = useState(1);

  const changePar = par => {
    setPar(par);
  };

  const currentHole = (props.scores.length + 1).toString();

  return (
    <div className="score">
      <h1 className="header">Hole {currentHole}</h1>

      <div className="par">
        <h2>Par: {par}</h2>
        <button className="par-button" onClick={() => changePar(3)}>
          3
        </button>
        <button className="par-button" onClick={() => changePar(4)}>
          4
        </button>
        <button className="par-button" onClick={() => changePar(5)}>
          5
        </button>
      </div>

      <div className="score">
        <h2>Strokes:</h2>
        <button className="inc-button" onClick={() => setStrokes(strokes - 1)}>
          -
        </button>
        <input className="score-input" type="number" value={strokes}></input>
        <button className="inc-button" onClick={() => setStrokes(strokes + 1)}>
          +
        </button>
      </div>

      <br />

      <button
        className="button"
        onClick={() => props.addScoreAndPar(strokes, par)}
      >
        Save
      </button>
    </div>
  );
};

export default Score;
