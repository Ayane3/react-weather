import React from "react";
import FormattedDate from "./FormattedDate";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  console.log(props);
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1 className="city">{props.data.city}</h1>
          <ul>
            <li>
              <span>
                <FormattedDate date={props.data.date} />
              </span>{" "}
              <span className="description">{props.data.description}</span>
            </li>
            <li>
              Humidity:{" "}
              <strong className="humidity">{props.data.humidity}</strong>%,
              Wind:
              <strong className="wind"> {props.data.wind}</strong> km/h
            </li>
          </ul>
        </div>

        <div className="col-6">
          <div className="temperature-container">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt={props.data.description}
              width="100"
            />
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="units"> °C </span>
          </div>
        </div>

        <div className="weather-forecast" />
      </div>
    </div>
  );
}
