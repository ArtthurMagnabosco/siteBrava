import "./Mobile/sass/PaginaInicial.css";
import PaginaInicialMobile from "./Mobile";
import { useEffect, useState } from "react";

const PaginaInicial = () => {
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
        {isMobile ? <PaginaInicialMobile /> : <p>Pagina inicial desk</p>}
    </>
    );
};

export default PaginaInicial;
