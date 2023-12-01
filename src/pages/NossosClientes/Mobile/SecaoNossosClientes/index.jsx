import "./sass/SecaoNossosClientes.scss";
import { logoClientesColorido } from "../../clientes";

const SecaoNossosClientesMobile = () => {
  const c = 1;
  return (
    <div className="nossos-clientes__container">
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

export default SecaoNossosClientesMobile;
