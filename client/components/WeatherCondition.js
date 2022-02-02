import React from "react";

export default function WeatherCondition(props) {
    return (
        <div className="square flex-style">
            <p className="small-text">{props.hourText}</p>
            <p className="small-text">{props.tempText}°C</p>
            <img className="img-resp" src={props.source} alt={props.alt} />
        </div>
    )
}