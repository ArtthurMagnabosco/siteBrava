import "./sass/PaginaInicial.css";
import Banner from "./Banner";
import Clientes from "./Clientes";
import SecaoOQueFazemos from "../../../components/SecaoOQueFazemos/Mobile";
import Proposito from "./Proposito";
import TestimonialSlider from "../../DepoimentoClientes"
import Form from "../../../components/Form";

const PaginaInicialMobile = () => {
  return (
    <div className="home">
      <Banner />
      <Clientes />
      <SecaoOQueFazemos home />
      <Proposito />
      <TestimonialSlider />
      <Form home/>
    </div>
  );
};

export default PaginaInicialMobile;
