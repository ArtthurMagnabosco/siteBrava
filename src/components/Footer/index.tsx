'use client';

import { useState, useEffect } from "react";
import FooterMobile from "./Mobile/index";
import FooterDesk from "./Desk/index";

const Footer = () => {

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
                <FooterMobile /> :
                <FooterDesk />}
        </>
    )
}

export default Footer