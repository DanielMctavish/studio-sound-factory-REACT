import React from "react";
import Insticon from "../../medias/icons/insta-black.png"
import Faceicon from "../../medias/icons/face-icon-black.png"
import Twitericon from "../../medias/icons/twitter-black.png"

export default ()=>{
    return(
        <div id="icons-bar">
            <img src={Insticon} alt="" />
            <img src={Faceicon} alt="" />
            <img src={Twitericon} alt="" />  
        </div>
    )
}