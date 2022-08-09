import React from "react";
import './Pages.css'
import iconInsta from "../../medias/icons/insta-black.png"

export default () => {
    return (
        <div id="page05" className="pages-geral">
            <h3>
                Temos o melhor time técnico do mercado
            </h3>
            <div id="fluxograma-técnico">
                <li>
                    Erick Jones - Engenheiro de Som
                    <img src={iconInsta} style={{ width: "3vh" }} />
                </li>
                <li>
                    Ellen Lis - Produtora e Orquestradora
                    <img src={iconInsta} style = {{width:"3vh"}} />
                </li>
                <li>
                    Paul Vic - Produtor pop e Engenheiro
                    <img src={iconInsta} style = {{width:"3vh"}} />
                </li>
                <li>
                    Jenifer Silva - Produtora e Pianista
                    <img src={iconInsta} style = {{width:"3vh"}} />
                </li>
            </div>
        </div>
    )
}