import React from "react";

export default function WeatherImgages(props) {
    return (
        <div className="weather-pred flex-style">
            <div className="flex-style weather-div-img">
                <img className="img-resp" alt={props.alt1} src={props.source1} />
                <img className="img-resp" alt={props.alt2} src={props.source2} />
            </div>
            <div className="flex-style weather-div-img">
                <img className="img-resp" alt={props.alt3} src={props.source3} />
                <img className="img-resp" alt={props.alt4} src={props.source4} />
            </div>
            <div  className="flex-style weather-div-img">
                <img className="img-resp" alt={props.alt5} src={props.source5} />
                <img className="img-resp" alt={props.alt6} src={props.source6} />
            </div>
        </div>
    )
}