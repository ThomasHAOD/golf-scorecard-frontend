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

  let scoreTable = (
    <table>
      <tr>
        <th>Hole</th>
        <th>Par</th>
        <th>Strokes</th>
      </tr>
      <tbody>{scoreRows}</tbody>
    </table>
  );

  //   if (props.holes === 18) {
  //     scoreTable = (
  //       <table>
  //         <tr>
  //           <th colSpan="3">Front 9</th>
  //           <th colSpan="3">Back 9</th>
  //         </tr>
  //         <tr>
  //           <th>Hole</th>
  //           <th>Par</th>
  //           <th>Strokes</th>

  //           <th>Hole</th>
  //           <th>Par</th>
  //           <th>Strokes</th>
  //         </tr>
  //         <tbody>{scoreRows}</tbody>
  //       </table>
  //     );
  //   }

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

  let button = (
    <Link to="/score">
      <button className="next-hole-button">Next Hole</button>
    </Link>
  );

  if (props.holes === props.scores.length) {
    button = (
      <Link to="/">
        <button className="next-hole-button" onClick={props.newRound}>
          New Round
        </button>
      </Link>
    );
  }
  return (
    <div className="scorecard">
      <h1>Scorecard</h1>
      {scoreTable}
      <h2 className="total-score">
        Score:
        {score}
      </h2>
      {button}
    </div>
  );
};

export default Scorecard;
