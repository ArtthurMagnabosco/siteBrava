import "../../../NossosClientes/Desk/SecaoNossosClientesDesk/sass/SecaoNossosClientesDesk.scss";
import { logoClientesColorido } from "./clientes_cinza";

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
        {logoClientesColorido.map((cliente) => (
          <div className="logo__clientes" key={cliente.id}>
            <img src={cliente.src}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecaoNossosClientesDesk;
