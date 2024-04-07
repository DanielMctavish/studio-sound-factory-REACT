import React, { useState } from "react";
import './Pages.css'
import background01 from "../../medias/backgrounds/pedais.jpg"
import background02 from "../../medias/backgrounds/2020_01_taylor_swift.webp"
import background03 from "../../medias/backgrounds/sertanejo-942x480.jpg"
import background04 from "../../medias/backgrounds/gospel.jpg"

export default () => {
    const [styleName, setstyleName] = useState("...")
    const [background, setBg] = useState("")
    const [contentRock, setContentRock] = useState(false)
    const [contentPop, setContentPop] = useState(false)

    function changeStylename(value) {
        setstyleName(value.target.innerHTML)
        const pageAtual = document.getElementById("page04")
        const bgAtual = document.getElementById("background-page04")

        switch (value.target.innerHTML) {
            case "ROCK":
                pageAtual.style.background = "#404040"
                pageAtual.style.color = "white"
                bgAtual.style.top = "-20vh"
                setBg(background01)
                setContentRock(true)
                setContentPop(false)
                break;
            case "POP":
                pageAtual.style.background = "#eb8aeb"
                bgAtual.style.top = "2vh"
                setBg(background02)
                setContentRock(false)
                setContentPop(true)
                break;
            case "SERTANEJO":
                pageAtual.style.background = "#ab770f"
                pageAtual.style.color = "white"
                bgAtual.style.top = "4vh"
                setBg(background03)
                setContentRock(false)
                setContentPop(false)
                break;
            case "GOSPEL":
                pageAtual.style.background = "#1271c9"
                pageAtual.style.color = "white"
                bgAtual.style.top = "-4vh"
                setBg(background04)
                setContentRock(false)
                setContentPop(false)
                break;
        }
    }

    return (
        <div id="page04" className="pages-geral">
            <h1>VOCÊ É DO {styleName}</h1>
            <div id="background-page04"><img src={background} alt="" /></div>
            <div id="list-styles">
                <li onClick={changeStylename}>ROCK</li>
                <li onClick={changeStylename}>POP</li>
                <li onClick={changeStylename}>SERTANEJO</li>
                <li onClick={changeStylename}>GOSPEL</li>
            </div>
            {
                contentRock ?
                    <div id="text-content" style={{height:"auto"}}>
                        <h2>Rock N' Roll!</h2>
                        <p>
                            Se você é do rock e sonha em tocar nos maiores palcos do país e do mundo,
                            é hora de começar a construir seu trabalho. Oferecemos o melhor serviço de
                            gravação com amplificadores e pedais lendários, bateria com captação de alta
                            qualidade e produtores envolvidos nas maiores produções de "metal style" do mundo.
                            venha construir seu futuro conosco!
                        </p>
                    </div>
                    : ""
            }
            {
                contentPop ?
                    <div id="text-content" style={{height:"auto"}}>
                        <h2>Poooooooop!</h2>
                        <p>
                            POP! milhões de seguidores! Música com alta energia! Bastante admiradores mundo afora, e sua música 
                            na boca do povo! aproveite esse chance pra fazer sua música explodir no mundo!
                        </p>
                    </div>
                    : ""
            }

        </div>
    )
}