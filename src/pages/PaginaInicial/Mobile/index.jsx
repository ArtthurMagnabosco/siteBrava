import "./sass/PaginaInicial.css";
import Banner from "./Banner";
import Clientes from "./Clientes";
import SecaoOQueFazemos from "../../../components/SecaoOQueFazemos/Mobile";
import Proposito from "./Proposito";
import Form from "../../../components/Form";

const PaginaInicialMobile = () => {
  return (
    <div className="home">
      <Banner />
      <Clientes />
      <SecaoOQueFazemos home />
      <Proposito />
      <Form home/>
    </div>
  );
};

export default PaginaInicialMobile;
