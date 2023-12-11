import "./sass/PaginaInicial.css";
import Banner from "./Banner";
import Clientes from "./Clientes";
import SecaoOQueFazemos from "../../../components/SecaoOQueFazemos/Mobile";
import Proposito from "./Proposito";
import Form from "../../../components/Form";
import Depoimentos from "../../../components/Depoimentos";

const PaginaInicialMobile = () => {
  return (
    <div className="home">
      <Banner />
      <Clientes />
      <SecaoOQueFazemos home />
      <Proposito />
      <Depoimentos />
      <Form home/>
    </div>
  );
};

export default PaginaInicialMobile;
