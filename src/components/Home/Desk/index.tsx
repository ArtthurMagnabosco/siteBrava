'use client';

import Banner from "./Banner";
import Clientes from "../../../app/nossos-clientes/Desk/index";
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
      <Clientes Home={true}/>
      <TestimonialSlider isMobile={false} />
      <SecaoOQueFazemos Home={true} />
      <Proposito />
      <ContatoDesk />
    </div>
  );
};

export default HomeDesktop;
