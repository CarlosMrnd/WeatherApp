import React from "react";

export default function WeatherCondition(props) {
    return (
        <div className="weather-pred flex-style">
            <p className="medium-text text-center">{props.text1}-{props.text2} </p>
            <p className="medium-text text-center">{props.text3}-{props.text4} </p>
            <p className="medium-text text-center">{props.text5}-{props.text6} </p>
        </div>
    )
}