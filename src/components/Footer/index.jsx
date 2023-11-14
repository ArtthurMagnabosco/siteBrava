import { useState } from "react"
import { useEffect } from "react"
import FooterMobile from "./Mobile"
import FooterDesk from "./Desk"

const Footer = () => {

    const [isMobile, setIsMobile] = useState()
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