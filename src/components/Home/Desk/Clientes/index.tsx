import "@/app/nossos-clientes/Desk/SecaoNossosClientesDesk/sass/SecaoNossosClientesDesk.scss";
import { logoClientesColorido } from "./clientes_cinza";
import Image from "next/image";

const SecaoNossosClientesDesk = () => {
  return (
    <div className="nossos-clientes__container_desk">
      <div className="nossos-clientes__header">
        <h2 className="header__title2">NOSSOS CLIENTES</h2>
        <h1 className="header__title1">
          Quem <span className="text-highlight">confia</span> em nosso trabalho
          e <span className="text-highlight">atesta</span> nossa qualidade
        </h1>
        <p className="header__text1">
          Somos um grupo que oferece diferentes soluções para diferentes
          necessidades, dentro do ecossistema do mercado digital.
        </p>
      </div>

      <div className="nossos-clientes__body">
        {logoClientesColorido.map((cliente, index) => (
          index <= 24 ?
            <div className="logo__clientes" key={cliente.id}>
              <Image src={cliente.src} alt=""></Image>
            </div>
            : <></>
        ))}
        <div style={{ gridColumn: 3, display: "flex", gap: "6.5rem", height: "110px", justifyContent: "center", width: "650px" }}>
          {logoClientesColorido.map((cliente, index) => (
            index <= 24 ?
              <></>
              :
              <div className="logo__clientes" key={cliente.id}>
                <Image src={cliente.src} alt=""></Image>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecaoNossosClientesDesk;
