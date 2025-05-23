'use client';

import { useEffect, useState } from 'react'
import NossosClientesMobile from './Mobile/index'
import NossosClientesDesk from './Desk/index'
// import Form from '../../components/Form'

const NossosClientes = () => {

    const [isMobile, setIsMobile] = useState(true)
    const handleWidth = () => {
        if (typeof window === "undefined") return
        if (window?.innerWidth >= 1024) {
            setIsMobile(false)
        } else {
            setIsMobile(true)
        }
    }
    useEffect(() => {
        handleWidth()
        window.addEventListener("resize", handleWidth)
        return () => {
            window.removeEventListener("resize", handleWidth)
        }
    }, [])

    return (
        <>
            {isMobile ?
                <NossosClientesMobile /> :
                <NossosClientesDesk />}
        </>

    )
}

export default NossosClientes