import SessaoOQueFazemos from "../../../components/SessaoOQueFazemos/Mobile";
import Banner from "./Banner";
import Clientes from "./Clientes";
import "./sass/PaginaInicial.css";

const PaginaInicialMobile = () => {
  return (
    <div className="home">
      <Banner />
      <Clientes />
      <SessaoOQueFazemos />
    </div>
  );
};

export default PaginaInicialMobile;
