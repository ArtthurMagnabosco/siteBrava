'use client';

import Banner from "./Banner";
import Clientes from "./Clientes";
import SecaoOQueFazemos from "../../SecaoOQueFazemos/Desk";
import Proposito from "./Proposito";
import TestimonialSlider from "../../DepoimentoClientes";
import ContatoDesk from "../../Contato/ContatoDesk/ContatoDesk";
// src\components\Contato\ContatoDesk\ContatoDesk.tsx

// import Form from "../../../components/Form";

const HomeDesktop = () => {
  return (
    <div className="home">
      <Banner />
      <Clientes />
      <TestimonialSlider />
      <SecaoOQueFazemos Home={true} />
      <Proposito />
      <ContatoDesk />
    </div>
  );
};

export default HomeDesktop;
