import { Link } from "react-router-dom";
import LogoBravaVerde from "../../../assets/imagens/logo/logoBravaVerde.svg";
import IconMenu from "../../../assets/imagens/icons/icon-menu.svg";
import "./sass/Header.scss"
import { useState } from "react";

const HeaderMobile = ({openMenu}) => {
   return <>
    <header>
        <div className="header__container">
            <Link to="/">
                <img src={LogoBravaVerde} alt="Logo Brava" />
            </Link>
            <div className="header__menu-button" >
                <img src={IconMenu} alt="iconMenu" onClick={() => openMenu()} />
            </div>
                    
                    
        </div>
    </header>
   </>
    
}

export default HeaderMobile