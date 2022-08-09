
//GENERAL SCRIPTS-----------------------------------------

const Script = {
    PlayFunc: () => {
        const menuicon = document.getElementById("Menu-icon")
        const menulist = document.getElementById("menu-list");
        const buttonsMenuList = document.querySelectorAll("#menu-list > ul > li")
        menuicon.addEventListener("click", () => {
            menulist.classList.toggle("activate")
            menuicon.classList.toggle("activate")
        })

        

        buttonsMenuList.forEach(el => {
            el.addEventListener("click", () => {

                let page01 = document.getElementById("page01");
                let page02 = document.getElementById("page02");
                let page03 = document.getElementById("page03");
                let page04 = document.getElementById("page04");
                let page05 = document.getElementById("page05");
                let page06 = document.getElementById("page06");
                let page07 = document.getElementById("page07");


                function SwitchExec(option) {
                    page01.style.opacity = option[0];
                    page01.style.transform = "translateX(30vh) scale(1.5)"
                              
                    page02.style.opacity = option[1];
                    page02.style.transform = "translateX(30vh) scale(.5)"

                    page03.style.opacity = option[2];
                    page03.style.transform = "translateX(30vh) scale(.5)"

                    page04.style.opacity = option[3];
                    page04.style.transform = "translateX(30vh) scale(.5)"

                    page05.style.opacity = option[4];
                    page05.style.transform = "translateX(30vh) scale(.5)"

                    page06.style.opacity = option[5];
                    page06.style.transform = "translateX(30vh) scale(.5)"

                    page07.style.opacity = option[6];
                    page07.style.transform = "translateX(30vh) scale(.5)"

                }

                switch (el.value) {
                    case 1:
                        page01.style.display = "flex" 
                        page01.style.transition = "1s"
                        menulist.classList.toggle("activate")
                        menuicon.classList.toggle("activate")

                        SwitchExec(["", "0", "0", "0", "0", "0", "0"])

                        setTimeout(() => {
                            page02.style.display = "none" 
                            page03.style.display = "none" 
                            page04.style.display = "none" 
                            page05.style.display = "none" 
                            page06.style.display = "none" 
                            page07.style.display = "none"

                            page01.style.opacity = "1";
                            page01.style.transform = "scale(1)"  
                        }, 300)

                        break;
                    case 2:
                        page02.style.display = "flex" 
                        page02.style.transition = "1s"
                        menulist.classList.toggle("activate")
                        menuicon.classList.toggle("activate")

                        SwitchExec(["0", "", "0", "0", "0", "0", "0"])

                        setTimeout(() => {
                            page01.style.display = "none" 
                            page03.style.display = "none" 
                            page04.style.display = "none" 
                            page05.style.display = "none" 
                            page06.style.display = "none" 
                            page07.style.display = "none" 
        
                            page02.style.opacity = "1";
                            page02.style.transform = "scale(1)"
                        }, 300)

                        break;
                    case 3:
                        page03.style.display = "flex" 
                        page03.style.transition = "1s"
                        menulist.classList.toggle("activate")
                        menuicon.classList.toggle("activate")

                        SwitchExec(["0", "0", "", "0", "0", "0", "0"])

                        setTimeout(() => {
                            page01.style.display = "none" 
                            page02.style.display = "none" 
                            page04.style.display = "none" 
                            page05.style.display = "none" 
                            page06.style.display = "none" 
                            page07.style.display = "none" 

                            page03.style.opacity = "1";
                            page03.style.transform = "scale(1)"
                        }, 300)

                        break;
                    case 4:
                        page04.style.display = "flex" 
                        page04.style.transition = "1s"
                        menulist.classList.toggle("activate")
                        menuicon.classList.toggle("activate")

                        SwitchExec(["0", "0", "0", "", "0", "0", "0"])

                        setTimeout(() => {
                            page01.style.display = "none" 
                            page02.style.display = "none" 
                            page03.style.display = "none" 
                            page05.style.display = "none" 
                            page06.style.display = "none" 
                            page07.style.display = "none" 

                            page04.style.opacity = "1";
                            page04.style.transform = "scale(1)"
                        }, 300)

                        break;
                    case 5:
                        page05.style.display = "flex" 
                        page05.style.transition = "1s"
                        menulist.classList.toggle("activate")
                        menuicon.classList.toggle("activate")

                        SwitchExec(["0", "0", "0", "0", "", "0", "0"])

                        setTimeout(() => {
                            page01.style.display = "none" 
                            page02.style.display = "none" 
                            page03.style.display = "none" 
                            page04.style.display = "none" 
                            page06.style.display = "none" 
                            page07.style.display = "none" 

                            page05.style.opacity = "1";
                            page05.style.transform = "scale(1)"
                        }, 300)

                        break;
                    case 6:
                        page06.style.display = "flex" 
                        page06.style.transition = "1s"
                        menulist.classList.toggle("activate")
                        menuicon.classList.toggle("activate")

                        SwitchExec(["0", "0", "0", "0", "0", "", "0"])

                        setTimeout(() => {
                            page01.style.display = "none" 
                            page02.style.display = "none" 
                            page03.style.display = "none" 
                            page04.style.display = "none" 
                            page05.style.display = "none" 
                            page07.style.display = "none" 

                            page06.style.opacity = "1";
                            page06.style.transform = "scale(1)"
                        }, 300)

                        break;
                    case 7:
                        page07.style.display = "flex" 
                        page07.style.transition = "1s"
                        menulist.classList.toggle("activate")
                        menuicon.classList.toggle("activate")

                        SwitchExec(["0", "0", "0", "0", "0", "0", "0"])

                        setTimeout(() => {
                            page01.style.display = "none" 
                            page02.style.display = "none" 
                            page03.style.display = "none" 
                            page04.style.display = "none" 
                            page05.style.display = "none" 
                            page06.style.display = "none" 

                            page07.style.opacity = "1";
                            page07.style.transform = "scale(1)"
                        }, 400)

                        break;
                }
            })
        })
        
    }
}

export default Script;