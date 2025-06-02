import { headers } from 'next/headers'
import HeaderMobile from "./Mobile"
import HeaderDesk from './Desk'

const Header = () => {
  const headersList = headers();
  const userAgent = headersList.get('user-agent') || '';
  const isMobile = /mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(userAgent);

    return (
        <>
            {isMobile ? <HeaderMobile /> : <HeaderDesk />}
        </>
    )
    
}

export default Header