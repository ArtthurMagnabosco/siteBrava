import "./sass/PaginaInicial.css";
import Banner from "./Banner";
import Clientes from "./Clientes";
import SessaoOQueFazemos from "../../../components/SessaoOQueFazemos/Mobile";
import Proposito from "./Proposito";

const PaginaInicialMobile = () => {
  return (
    <div className="home">
      <Banner />
      <Clientes />
      <SessaoOQueFazemos />
      <Proposito />
    </div>
  );
};

export default PaginaInicialMobile;
