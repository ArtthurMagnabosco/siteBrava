import { useEffect,useState } from 'react'
import OqueFazemosMobile from './Mobile'
import OqueFazemosDesk from './Desk'

const OQueFazemos = () => {
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
            <OqueFazemosMobile/> :
            <OqueFazemosDesk/>}
            </>
            
        )
        
}

export default OQueFazemos