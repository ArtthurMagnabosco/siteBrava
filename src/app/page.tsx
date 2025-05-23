'use client';

import { useEffect, useState } from "react";
import HomeMobile from "@/components/Home//Mobile";
import HomeDesktop from "@/components/Home/Desk";

const Home = () => {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  const handleWidth = () => {
    window?.innerWidth >= 1024 ? setIsMobile(false) : setIsMobile(true);
  };

  useEffect(() => {
    handleWidth();
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <>
        {isMobile ? <HomeMobile /> : <HomeDesktop />}
    </>
    );
};
export default Home;