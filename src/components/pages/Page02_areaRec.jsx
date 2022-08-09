import React from "react";
import wave_white from "../../medias/waves/wave_white.png"
import wave_purple from "../../medias/waves/wave_purple.png"
import "./waves.css"

export default (props)=>{
    return(
        <div id="areaRec">
            <div id="marks"></div>
            <div id="marks"></div>
            <div id="marks"></div>
            <div id="marks"></div>
            <div id="marks"></div>
            <div id="marks"></div>
            <div id="marks"></div>
            <div id="marks"></div>
            <img src={wave_white} id="wave-01" />
            <h2 id="wave01-text">Gravação técnica de alta qualidade e criatividade</h2>
            <img src={wave_purple} id="wave-02" />
            <h2 id="wave02-text">Experiência única</h2>
        </div>
    )
}