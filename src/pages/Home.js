import React from "react";
import BannerImage from "../assets/food.jpeg";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>My Restaurant App</h1>
        <p>
          Order Some Food
          <br></br>
          And Also Order a Project!
        </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
