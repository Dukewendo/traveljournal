import React from "react";

function Card(props) {
  return (
    <div className="place--card">
      <h2 className="place--location">{props.location}</h2>
      <h1 className="place--title">{props.title}</h1>
      <h2 className="place--startDate">{props.startDate}</h2>
      <h2 className="place--endDate">{props.endDate}</h2>
      <p className="place--description">{props.description}</p>
      <img className="img--url" src={props.imageUrl} alt="" />
    </div>
  );
}

export default Card;
