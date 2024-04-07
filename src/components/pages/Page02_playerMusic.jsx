import React from "react";
import music01 from "../audios/this is love - master.mp3"
import cover from "../audios/capa/This_is_love.png"
export default ()=>{
    return(
        <div id="card_music">
            <h2>confira nossa qualidade</h2>
            <p id="title-music">THIS IS LOVE</p>
            <img src={cover} alt="" id="cover_img" />
            <audio src={music01} type="audio/mp3" id="audio-controlers" autoPlay></audio>
        </div>
    )
}