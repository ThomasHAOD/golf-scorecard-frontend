import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = props => {
  return (
    <div className="Home">
      <Link to="/holes">
        <button className="new-round">New Round</button>
      </Link>
    </div>
  );
};

export default Home;
