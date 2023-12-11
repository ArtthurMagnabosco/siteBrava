import DepoimentosMobile from "./Mobile";
import DepoimentosDesk from "./Desk"
import { useEffect, useState } from "react";

const Depoimentos = () => {
  const [isMobile, setIsMobile] = useState();
  const handleWidth = () => {
    window.innerWidth >= 1024 ? setIsMobile(false) : setIsMobile(true);
  };
  useEffect(() => {
    handleWidth();
    window.addEventListener("resize", handleWidth);
  }, []);

  return (
    <>
    {isMobile ? 
    <DepoimentosMobile /> : 
    <DepoimentosDesk />}
    </>
  );
};

export default Depoimentos;
