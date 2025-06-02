import { headers } from 'next/headers'
import NossosClientesMobile from './Mobile/index'
import NossosClientesDesk from './Desk/index'
// import Form from '../../components/Form'

const NossosClientes = () => {
 const headersList = headers();
  const userAgent = headersList.get('user-agent') || '';
  const isMobile = /mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(userAgent);
  
    return (
        <>
            {isMobile ?
                <NossosClientesMobile /> :
                <NossosClientesDesk />}
        </>

    )
}

export default NossosClientes