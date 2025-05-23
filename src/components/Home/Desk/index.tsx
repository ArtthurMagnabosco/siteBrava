'use client';

import Banner from "./Banner";
import Clientes from "./Clientes";
import SecaoOQueFazemos from "../../SecaoOQueFazemos/Desk";
import Proposito from "./Proposito";
import TestimonialSlider from "../../DepoimentoClientes";
// import Form from "../../../components/Form";

const HomeDesktop = () => {
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

export default HomeDesktop;
