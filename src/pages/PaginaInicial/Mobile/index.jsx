import "./sass/PaginaInicial.css";
import Banner from "./Banner";
import Clientes from "./Clientes";
import SessaoOQueFazemos from "../../../components/SessaoOQueFazemos/Mobile";
import Proposito from "./Proposito";
import Form from "../../../components/Form";

const PaginaInicialMobile = () => {
  return (
    <div className="home">
      <Banner />
      <Clientes />
      <SessaoOQueFazemos />
      <Proposito />
      <Form />
    </div>
  );
};

export default PaginaInicialMobile;
