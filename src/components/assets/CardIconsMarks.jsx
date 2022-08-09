import React from "react";
import TagimaMark from "../../medias/marcas/tagima.png"
import FenderMark from "../../medias/marcas/fender-logo-5441.png"
import FocusriteMark from "../../medias/marcas/Focusrite_Logo_White.png"
import JblMark from "../../medias/marcas/jbl-logo-8-1.png"
import ZoomMark from "../../medias/marcas/zoomlogo.png"

export default ()=>{
    return(
        <div id="card-marcas">
            <img src={TagimaMark} alt="" />
            <img src={FenderMark} alt="" />
            <img src={FocusriteMark} alt="" />
            <img src={JblMark} alt="" />
            <img src={ZoomMark} alt="" />
        </div>
    )
}
