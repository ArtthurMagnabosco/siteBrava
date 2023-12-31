import Banner from "./Banner";
import Clientes from "./Clientes";
import SecaoOQueFazemos from "../../../components/SecaoOQueFazemos/Desk";
import Proposito from "./Proposito";
import Form from "../../../components/Form";

const PaginaInicialDesk = () => {
  return (
    <div className="home">
      <Banner />
      <Clientes />
      <SecaoOQueFazemos home />
      <Proposito />
      <Form home />
    </div>
  );
};

export default PaginaInicialDesk;
