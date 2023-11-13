import { useEffect, useState } from "react"
import HeaderMobile from "./Mobile"
import HeaderDesk from './Desk'

const Header = ({openMenu}) => {

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
        <HeaderMobile openMenu={() => openMenu()}/> :
        <HeaderDesk/>}
        </>
    )
    
}

export default Header