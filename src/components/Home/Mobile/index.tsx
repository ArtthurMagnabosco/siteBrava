'use client';

import "./sass/PaginaInicial.css";
import Banner from "@/components/Home/Mobile/Banner";
import Clientes from "@/components/Home/Mobile/Clientes";
import SecaoOQueFazemos from "../../SecaoOQueFazemos/Mobile";
import Proposito from "@/components/Home/Mobile/Proposito";
import TestimonialSlider from "../../DepoimentoClientes";
// import Form from "../../../components/Form";

const HomeMobile = () => {
  return (
    <div className="home">
      <Banner />
      <Clientes />
      <TestimonialSlider />
      <SecaoOQueFazemos Home={true} />
      <Proposito />
      {/* <Form home /> */}
    </div>
  );
};

export default HomeMobile;
