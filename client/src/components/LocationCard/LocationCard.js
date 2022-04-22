import React from "react";
import "./LocationCard.css";

function LocationCard(props) {
  return (
    <div className="col-4">
      <div class="card wheretocard" style={{ width: "25rem" }}>
        <img
          class="card-img-top wheretocardimg"
          src={props.image}
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{props.location}</h5>
        </div>
      </div>
    </div>
  );
}

export default LocationCard;
