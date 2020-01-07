import React from "react";
import "./Holes.css";

const Holes = props => {
  return (
    <div className="number-of-holes">
      <button
        className="button nine-holes"
        onClick={() => props.setNumberOfHoles(9)}
      >
        9 Holes
      </button>
      <button
        className="button eighteen-holes"
        onClick={() => props.setNumberOfHoles(18)}
      >
        18 Holes
      </button>
    </div>
  );
};

export default Holes;
