import React from "react";
import "./fader.css"

export default (props)=>{
    return(
        <div id="track">
            <input type="text" value={props.title} className = "input-track-title"/>
            <input type="range" name="" id="fader-track" className="fader"/>
        </div>
    )
}