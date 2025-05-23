'use client';

import { useEffect, useState } from 'react';
import OqueFazemosMobile from './Mobile/index';
import OqueFazemosDesk from './Desk/index';

const OQueFazemos = () => {
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
                <OqueFazemosMobile /> :
                <OqueFazemosDesk />}
        </>

    )

}

export default OQueFazemos