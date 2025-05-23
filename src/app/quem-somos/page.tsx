'use client';

import { useEffect, useState } from 'react'
import QuemSomosMobile from './Mobile'
import QuemSomosDesk from './Desk'

const QuemSomos = () => {
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
        <QuemSomosMobile/> :
        <QuemSomosDesk/>}
        </>
    )
}

export default QuemSomos;