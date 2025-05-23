'use client';

import React, { useEffect, useState } from "react";
import HeaderMobile from "./Mobile"
import HeaderDesk from './Desk'

const Header = () => {

    const [isMobile, setIsMobile] = useState(true)
    const handleWidth = () => {
        window.innerWidth >= 1024 ?
        setIsMobile(false) :
        setIsMobile(true)
    }
    useEffect(() => {
        handleWidth()
        window.addEventListener("resize", handleWidth)
    }, [])
    
    return (
        <>
        {isMobile ? 
        <HeaderMobile/> :
        <HeaderDesk/>}
        </>
    )
    
}

export default Header