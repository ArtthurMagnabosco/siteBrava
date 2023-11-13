import { useEffect } from "react";
import { useState } from "react";
import Form from "../../components/Form";

const Contato = () => {
  const [isMobile, setIsMobile] = useState();
  const handleWidth = () => {
    window.innerWidth >= 1024 ? setIsMobile(false) : setIsMobile(true);
  };
  useEffect(() => {
    handleWidth();
    window.addEventListener("resize", handleWidth);
  }, []);

  return <>{isMobile ? <Form /> : "contato desk"}</>;
};

export default Contato;
