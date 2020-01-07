import React from "react";
import { Link } from "react-router-dom";

import "./Scorecard.css";

const Scorecard = props => {
  const scoreRows = props.scores.map((score, index) => {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{props.pars[index]}</td>
        <td>{score}</td>
      </tr>
    );
  });

  let runningTotal = 0;

  props.scores.forEach((score, index) => {
    const total = runningTotal - (score - props.pars[index]);
    runningTotal = total;
  });

  let score = "";

  if (runningTotal === 0) {
    score = "Even";
  } else if (runningTotal < 0) {
    score = `+${runningTotal.toString()}`;
  } else {
    score = `-${Math.abs(runningTotal).toString()}`;
  }

  return (
    <div className="scorecard">
      <h1>Scorecard</h1>
      <table>
        <tr>
          <th>Hole</th>
          <th>Par</th>
          <th>Strokes</th>
        </tr>
        <tbody>{scoreRows}</tbody>
      </table>
      <h1>
        Score:
        {score}
      </h1>
      <Link to="/score">
        <button className="next-hole-button">Next Hole</button>
      </Link>
    </div>
  );
};

export default Scorecard;
