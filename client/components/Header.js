import React from "react";
import { IoLocationSharp } from "react-icons/io5";

export default function Header(props) {
    return (
        <header className={props.class}>
            <img id="img-head" className="img-resp" src={props.source} alt={props.alt} />
            <h4 className="big-text">{props.wText}</h4>
            <h2 className="small-text">{props.hText}</h2>
            <div className="flex-style text-center">
                <IoLocationSharp className="icon" />
                <p className="medium-text">{props.location}</p>
            </div>
        </header>
    )
}