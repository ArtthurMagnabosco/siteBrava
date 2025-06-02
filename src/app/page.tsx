import { headers } from 'next/headers'
import HomeMobile from "@/components/Home/Mobile";
import HomeDesktop from "@/components/Home/Desk";

export default function Home() {
  const headersList = headers();
  const userAgent = headersList.get('user-agent') || '';
  const isMobile = /mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(userAgent);

  return (
    <>
      {isMobile ? <HomeMobile /> : <HomeDesktop />}
    </>
  );
}