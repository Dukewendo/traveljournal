import React from "react";

function Card(props) {
  return (
    <div className="place--card">
      <img className="img--url" src={props.imageUrl} alt="" />

      <div className="place--container">
        <h3 className="place--location">{props.location}</h3>
        <a href={props.googleMapsUrl} className="place--googleMaps">
          View on Google Maps
        </a>
      </div>

      <h1 className="place--title">{props.title}</h1>
      <div className="date--container">
        <h3 className="place--startDate">{props.startDate}</h3>
        <h3 className="place--endDate">- {props.endDate}</h3>
      </div>

      <p className="place--description">{props.description}</p>
    </div>
  );
}

export default Card;
