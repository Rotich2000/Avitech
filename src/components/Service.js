import React from 'react'
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './Services.css'

const Service = (props) => {
  return (
    <div className="container">
    <div className="card">
      <div className="card__body">
          <img src={props.img} className="card__image"/>
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn">READ MORE</button>
    </div>
    </div>
  )
}

export default Service
