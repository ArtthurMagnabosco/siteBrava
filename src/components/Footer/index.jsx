import { useState } from "react"
import FooterMobile from "./Mobile"
import { useEffect } from "react"

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
        <p>Footer desk</p>}
        </>
    )
}

export default Footer