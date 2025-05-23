'use client';

import Link from "next/link";
import LogoBravaVerde from "../../../../public/assets/imagens/logo/logoBravaVerde.svg";
import IconMenu from "../../../../public/assets/imagens/icons/icon-menu.svg";
import "./sass/Header.scss"
import Image from "next/image";


const HeaderMobile = () => {
   return <>
    <header>
        <div className="header__container">
            <p></p>
            <Link href="/">
                <Image src={LogoBravaVerde} alt="Logo Brava" />
            </Link>
            <div className="header__menu-button" >
                <Image src={IconMenu} alt="iconMenu" />
            </div>                                     
        </div>
        <div className="placeholder"></div>
    </header>
   </>
    
}

export default HeaderMobile