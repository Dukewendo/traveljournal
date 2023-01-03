import React from "react";

function Card(props) {
    
  return (
    <div className="place--card">
      <h1>{props.title}</h1>
      <h2>{props.location}</h2>
      <img src = {props.imageUrl} alt=""/>
    </div>
  );
}

export default Card;
