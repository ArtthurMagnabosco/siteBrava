import { useEffect,useState } from 'react'
import OqueFazemosMobile from './Mobile'

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
            <p>Oque Fazemos desk</p>}
            </>
            
        )
        
}

export default OQueFazemos