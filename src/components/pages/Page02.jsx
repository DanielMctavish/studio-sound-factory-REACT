import React, { useState } from "react";
import './Pages.css'
import BgPage02 from "../../medias/mídias/videos/TinasheTV -- Inside My Home Studio_Trim.mp4"
import Page02_miniDaw from "./Page02_miniDaw";
import Page02_playerMusic from "./Page02_playerMusic";

export default () => {
    const [recClick, setRecClick] = useState(false)
    const [playClick,setPlay] =useState(false)


    function renderMiniDaw() {
        setRecClick(!recClick)
        if(playClick){
            setPlay(!playClick)
        }
    }

    function renderPLayermusic(){
        setPlay(!playClick)
        if(recClick){
            setRecClick(!recClick)
        }
    }

    function clearRender(){
        setRecClick(false)
        setPlay(false)
    }
    


    return (
        <div id="page02" className="pages-geral">
            <video controls autoPlay muted loop type="video/mp4" src={BgPage02} id="video-cantora" />
            <h1 id="title-page02">Gravação de alta qualidade</h1>
            <div id="shapes-studio">
                <div id="rec" onClick={renderMiniDaw}></div>
                <div id="play" onClick={renderPLayermusic}></div>
                <div id="pause" onClick={clearRender}></div>
            </div>
            <div id="describe-content-page02">
                somos um estúdio de criação musical,
                captura profissional de áudio e lançamento
                de diversos estilos musicas.
            </div>
            {
                recClick ?
                    <Page02_miniDaw/>:
                    ""
            }
            {
                playClick?
                <Page02_playerMusic/>:
                ""
            } 
        </div>
    )
}


