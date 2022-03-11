import React from "react";
import CardItem from "./CardItem";
import './Cards.css'

const Cards = () => {
  return (
    <div className="cards">
      <h1>Get unlimited home Internet</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
            src="images/photo3.jpg"
            text = "Get Internet at affordable prices"
            label="Ethernet cables"
            path='/services'
            />
            <CardItem
            src="images/photo6.jpg"
            text = "Get Internet at affordable prices"
            label="Routers"
            path='/services'
            />
            <CardItem
            src="images/photo1.jpg"
            text = "Get Internet at affordable prices"
            label="Splitter"
            path='/services'
            />
          </ul>
          <ul className="cards__items">
          <CardItem
            src="images/photo2.jpg"
            text = "Get Internet at affordable prices"
            label="Switches"
            path='/services'
            />
            <CardItem
            src="images/photo4.jpg"
            text = "Get Internet at affordable prices"
            label="Coaxial cables"
            path='/services'
            />
            <CardItem
            src="images/photo9.jpg"
            text = "Get Internet at affordable prices"
            label="Access points"
            path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
