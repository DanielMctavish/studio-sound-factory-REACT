import React from "react";
import "./Asset.css"

import abletonIcon from "../../medias/marcas/ableton.jpg"
import protoolsIcon from "../../medias/marcas/Pro_Tools.webp"
import studioOne from "../../medias/marcas/studioone500x500.jpg"
import wavesIcon from "../../medias/marcas/waves-logo-white.png"

export default ()=>{
    return(
        <div id="card-daws-icons">
            <img src={abletonIcon} alt="" />
            <img src={protoolsIcon} alt="" />
            <img src={studioOne} alt="" />
            <img src={wavesIcon} alt="" />
        </div>
    )
}