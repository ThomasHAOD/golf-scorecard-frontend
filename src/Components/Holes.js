import React from "react";
import { Link } from "react-router-dom";

import "./Holes.css";

const Holes = props => {
  return (
    <div className="number-of-holes">
      <Link to="/score">
        <button
          className="button nine-holes"
          onClick={() => props.setNumberOfHoles(9)}
        >
          9 Holes
        </button>
      </Link>

      <Link to="/score">
        <button
          className="button eighteen-holes"
          onClick={() => props.setNumberOfHoles(18)}
        >
          18 Holes
        </button>
      </Link>
    </div>
  );
};

export default Holes;
