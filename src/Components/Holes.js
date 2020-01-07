import React from "react";
import "./Holes.css";

const Holes = props => {
  return (
    <div className="number-of-holes">
      <button className="button nine-holes">9 Holes</button>
      <button className="button eighteen-holes">18 Holes</button>
    </div>
  );
};

export default Holes;
