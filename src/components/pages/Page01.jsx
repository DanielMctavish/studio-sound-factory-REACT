import React from "react";
import './Pages.css'
import CardDawsIcons from "../assets/CardIconsDaws"
import CardIconsMarks from "../assets/CardIconsMarks";
import BgPage01 from "../../medias/mídias/monitores_audio.jpg"

export default () => {
    return (
        <div id="page01" className="pages-geral">
            <img src={BgPage01} alt="" id="bg-page01"/>
            <h1>SUA EXPERIÊNCIA MUSICAL ALÉM DA IMAGINAÇÃO</h1>
            <h3>utilizamos as principais ferramentas para criação musical</h3>
            <CardDawsIcons/>
            <h3>somo patrocinados por grandes marcas</h3>
            <CardIconsMarks/>
        </div>
    )
}