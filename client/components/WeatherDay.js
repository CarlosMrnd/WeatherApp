import React from "react";

export default function WeatherDay(props) {
    return (
        <div className="weather-pred flex-style">
            <p className="medium-text text-center">{props.text1}</p>
            <p className="medium-text text-center">{props.text2}</p>
            <p className="medium-text text-center">{props.text3}</p>
        </div>
    )
}