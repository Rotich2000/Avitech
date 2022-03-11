import React from "react";
import "../App.css";
import Button from "./Button";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="/video/video-2.mp4" autoPlay loop muted/>
      <h1>Technology at your finger tips.</h1>
      <p>Your network solution is here.</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH OUR TECHNICIANS <i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
