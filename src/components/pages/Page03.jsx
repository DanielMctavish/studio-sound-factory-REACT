import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Pages.css'

//imagens import--------------------------
import img01 from "../../medias/galeria/galeria-01.png"
import img02 from "../../medias/galeria/galeria-02.png"
import img03 from "../../medias/galeria/galeria-03.png"
import img04 from "../../medias/galeria/galeria-04.png"
import img05 from "../../medias/galeria/galeria-05.png"
//-----------------------------------------------------
const slideImages = [
    {
        url: img01,
        caption: 'oque você vai encontrar?'
    },
    {
        url: img02,
        caption: 'equipamentos de ponta'
    },
    {
        url: img03,
        caption: 'microfone condenser HD'
    },
    {
        url: img04,
        caption: 'mixagem real-time'
    },
    {
        url: img05,
        caption: 'instrumentos reais'
    },
];

export default () => {
    return (
        <div id="page03" className="pages-geral">
            <h1>Temos tudo oque você precisa
                pra fazer sua música acontecer.</h1>
            
            <div className="slide-container">
                <Slide>
                    {slideImages.map((el, index) => (
                        <div className="each-slide" key={index}>
                            <div id="display-imgs">
                                <span id="descri_estrutura">{el.caption}</span> <br />
                                <img src={el.url} alt="" />
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    )
}