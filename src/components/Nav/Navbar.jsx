import React from "react";
import "./Navbar.css"
import SocialMediasIcons from "./SocialMediasIcons";
import Menuicon from "./Menuicon";
import logo from "../../medias/mídias/STUDIO POWER.png"

export default (props) => {
    return (
        <div id="nav-bar" style={{ background: props.Navcolor }}>
            <div id="logo-name">
                ESTUDIO SOUND FACTORY
            </div>
            <SocialMediasIcons />
            <Menuicon />
        </div>
    )
}