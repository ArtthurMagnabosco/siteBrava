import Banner from "./Banner";
import Clientes from "./Clientes";
import "./sass/PaginaInicial.css";

const PaginaInicialMobile = () => {
  return (
    <div className="home">
      <Banner />
      <Clientes />
    </div>
  );
};

export default PaginaInicialMobile;
