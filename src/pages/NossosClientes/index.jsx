import { useEffect,useState } from 'react'
import NossosClientesMobile from './Mobile/index'
import Form from '../../components/Form'

const NossosClientes = () => {

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
        <NossosClientesMobile/> :
        <p>Nossos Clientes desk</p>}
        </>
        
    )
}

export default NossosClientes