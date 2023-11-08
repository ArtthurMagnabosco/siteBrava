import { Link } from "react-router-dom";
import LogoBrava from "../../../assets/imagens/logo/logoBrava.svg";
import IconMenu from "../../../assets/imagens/icons/icon-menu.svg";
import { useState } from "react";

const HeaderMobile = ({openMenu}) => {
   return <>
    <header>
        <div className="header--container">
            <Link to="/">
                <img src={LogoBrava} alt="Logo Brava" />
            </Link>
            <div className="header--menu-button" >
            <img src={IconMenu} alt="iconMenu" onClick={() => openMenu()} />
            </div>
                    
                    
        </div>
    </header>
   </>
    
}

export default HeaderMobile