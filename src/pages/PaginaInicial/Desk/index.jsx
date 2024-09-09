import Banner from "./Banner";
import Clientes from "./Clientes";
import SecaoOQueFazemos from "../../../components/SecaoOQueFazemos/Desk";
import Proposito from "./Proposito";
import TestimonialSlider from "../../DepoimentoClientes"
import Form from "../../../components/Form";

const PaginaInicialDesk = () => {
  return (
    <div className="home">
      <Banner />
      <Clientes />
      <SecaoOQueFazemos home />
      <Proposito />
      <TestimonialSlider />
      <Form home />
    </div>
  );
};

export default PaginaInicialDesk;
