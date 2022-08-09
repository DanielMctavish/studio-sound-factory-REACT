import React from "react";
import './App.css'
import Navbar from "./Nav/Navbar";
import Menulist from "./Menu-list/Menulist";
import Page01 from "./pages/Page01";
import Page02 from "./pages/Page02";
import Page03 from "./pages/Page03";
import Page04 from "./pages/Page04";
import Page05 from "./pages/Page05";
import Page06 from "./pages/Page06";
import Page07 from "./pages/Page07";

export default (props)=>{
    return(
        <div id="app">
            <Navbar Navcolor = "rgb(43, 43, 43)"/>
            <Menulist/>
            <Page01/>
            <Page02/>
            <Page03/>
            <Page04/>
            <Page05/>
            <Page06/>
            <Page07/>
        </div>
    )
}

