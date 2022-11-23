import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmog } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureFull } from "@fortawesome/free-solid-svg-icons";

export default function Adds(props) {
  return (
    <div className="add-info">
      <hr class="upper" />
      <div class="row" id="else">
        <div class="col-4">
          Humidity <br />
          <div class="humidityIcon">
            <FontAwesomeIcon icon={faSmog} />
          </div>
          <span id="humidity">{props.humidity}</span>%
        </div>
        <div class="col-4">
          Wind
          <br />
          <div class="windIcon">
            <FontAwesomeIcon icon={faWind} />
          </div>
          <span id="wind">{props.wind}</span> km/h
        </div>
        <div class="col-4">
          Feels like
          <br />
          <div class="tempFeelingIcon">
            <FontAwesomeIcon icon={faTemperatureFull} />
          </div>
          <span id="feeling">{props.feeling}</span>˚C
        </div>
      </div>
      <hr class="lower" />
    </div>
  );
}
