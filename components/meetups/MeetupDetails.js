import React from "react";
import classes from "./MeetupDetails.module.css";

function MeetupDetails({ image, address, description, title }) {
  return (
    <div className={classes.details}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </div>
  );
}

export default MeetupDetails;
