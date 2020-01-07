import React from "react";
import "./Score.css";

const Score = props => {
  return (
    <div className="score">
      <h1 className="header">Hole 1</h1>

      <div className="par">
        <h2>Par:</h2>
        <button className="par-button">3</button>
        <button className="par-button">4</button>
        <button className="par-button">5</button>
      </div>

      <div className="score">
        <h2>Score</h2>
        <button className="inc-button">-</button>
        <input className="score-input" type="number" value="1"></input>
        <button className="inc-button">+</button>
      </div>

      <br />

      <button className="button">Save</button>
    </div>
  );
};

export default Score;
