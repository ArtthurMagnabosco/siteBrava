import { useEffect,useState } from 'react'
import QuemSomosMobile from './Mobile'

const QuemSomos = () => {
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
        <QuemSomosMobile/> :
        <p>Quem Somos desk</p>}
        </>
    )
}

export default QuemSomos;