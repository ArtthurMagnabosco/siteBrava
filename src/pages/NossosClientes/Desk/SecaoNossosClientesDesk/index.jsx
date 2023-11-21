import "./sass/SecaoNossosClientesDesk.scss";
import { logoClientesColorido } from "../../clientes.js";

const SecaoNossosClientesDesk = () => {
  return (
    <div className="nossos-clientes__container_desk">
      <div className="nossos-clientes__header">
        <h4 className="header__title2">NOSSOS CLIENTES</h4>
        <h3 className="header__title1">
          Quem <span className="text-highlight">confia</span> em nosso trabalho
          e <span className="text-highlight">atesta</span> nossa qualidade
        </h3>
        <p className="header__text1">
          Somos um grupo que oferece diferentes soluções para diferentes
          necessidades, dentro do ecossistema do mercado digital.
        </p>
      </div>

      <div className="nossos-clientes__body">
        {logoClientesColorido.map((cliente) => (
          <a
            className="logo__clientes"
            href={cliente.link}
            key={cliente.id}
            target="_blank"
          >
            <img src={cliente.src}></img>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SecaoNossosClientesDesk;
