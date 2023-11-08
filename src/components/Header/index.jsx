import { useEffect, useState } from "react"

const Header = () => {
    const [isMobile, setIsMobile] = useState(true)
    useEffect(() => {
        const handleWidth = () => {
            if (window.innerWidth >= 1024) {
                setIsMobile(false)
            }
        }
    })
    

    return (
        <>
        {isMobile ? 
        <p>Header mobile</p> :
        <p>Header desk</p>}
        </>
    )
    
}

export default Header