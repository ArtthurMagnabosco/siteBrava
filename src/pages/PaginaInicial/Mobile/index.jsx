import "./sass/PaginaInicial.css";
import Banner from "./Banner";
import Clientes from "./Clientes";
import SecaoOQueFazemos from "../../../components/SecaoOQueFazemos/Mobile";
import Proposito from "./Proposito";
import TestimonialSlider from "../../DepoimentoClientes";
import Form from "../../../components/Form";
// import VideoPlayer from "../../reels/index";

const PaginaInicialMobile = () => {
  return (
    <div className="home">
      {/* <VideoPlayer /> */}
      <Banner />
      <Clientes />
      <TestimonialSlider />
      <SecaoOQueFazemos home />
      <Proposito />
      <Form home />
    </div>
  );
};

export default PaginaInicialMobile;
