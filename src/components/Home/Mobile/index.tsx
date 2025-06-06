'use client';

import "./sass/PaginaInicial.css";
import Banner from "@/components/Home/Mobile/Banner";
import Clientes from "../../../app/nossos-clientes/Desk/index";
import SecaoOQueFazemos from "../../SecaoOQueFazemos/Mobile";
import Proposito from "@/components/Home/Mobile/Proposito";
import TestimonialSlider from "../../DepoimentoClientes";
import Contato from "@/components/Contato/Contato";
// import Form from "../../../components/Form";

const HomeMobile = () => {
  return (
    <div className="home">
      <Banner />
      <Clientes Home={true} />
      <TestimonialSlider isMobile={true} />
      <SecaoOQueFazemos Home={true} />
      <Proposito />
      <Contato />
    </div>
  );
};

export default HomeMobile;
