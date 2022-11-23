import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <form class="searchEngine">
      <div className="row">
        <div className="col-5">
          <input
            type="search"
            placeholder="Type in your city"
            id="citySearch"
            autocomplete="off"
          />
        </div>
        <div class="col-1">
          <input type="submit" value="Search" id="searchButton" />
        </div>
        <div className="col-2">
          <button className="currentLocationButton">
            <FontAwesomeIcon icon={faLocationCrosshairs} />
          </button>
        </div>
      </div>
    </form>
  );
}
