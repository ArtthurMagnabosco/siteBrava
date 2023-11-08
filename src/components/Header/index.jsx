import { useEffect, useState } from "react"

const Header = () => {

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
        <p>Header mobile</p> :
        <p>Header desk</p>}
        </>
    )
    
}

export default Header