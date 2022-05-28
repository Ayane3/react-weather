import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div class="row">
        <div class="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <span>
                {" "}
                <FormattedDate date={props.data.date} />
              </span>
              , <span id="description"></span>
            </li>
            <li>
              Humidity: <strong id="humidity"></strong>%, Wind:
              <strong id="wind"></strong>km/h
            </li>
          </ul>
        </div>
        <div class="col-6">
          <div class="temperature-container">
            <img src="" alt="" class="weather-image"  />
            <span class="temperature" id="temperature"></span>
            <span class="units"> °C </span>
          </div>
        </div>
        <div class="weather-forecast" id="forecast"></div>
      </div>
    </div>
  );
}
