import "./sass/Clientes.css";
import { Link } from "react-router-dom";
import { logosClientesDesk } from "../../sliderClientes/logosClientes";
import buttonArrow from "../../../../assets/imagens/icons/buttonArrow.svg";

const Clientes = () => {
  return (
    <div className="home__clientes-desk">
      <div className="clientes__titles">
        <p className="clientes__title2">Nossos clientes</p>
        <h2 className="clientes__title1">
          Fazemos parte de um grupo que oferece diferentes{" "}
          <span className="text-highlight">soluções</span> para diferentes{" "}
          <span className="text-highlight">necessidades</span>, dentro do
          ecossistema do mercado digital.{" "}
          <span className="text-highlight">Conheça nossos clientes</span>
        </h2>
      </div>
      <div className="clientes__brands">
        <div className="clientes__slider">
          {logosClientesDesk.group1.map((logo, index) => (
            <img className="clientes__slider__logo" src={logo} key={index} />
          ))}
          {logosClientesDesk.group1.map((logo, index) => (
            <img className="clientes__slider__logo" src={logo} key={index} />
          ))}
        </div>

        <div className="clientes__slider clientes__slider-reverse">
          {logosClientesDesk.group2.map((logo, index) => (
            <img className="clientes__slider__logo" src={logo} key={index} />
          ))}
          {logosClientesDesk.group2.map((logo, index) => (
            <img className="clientes__slider__logo" src={logo} key={index} />
          ))}
        </div>
      </div>

      <Link to="/nossos-clientes" className="clientes__mainbutton">
        Saiba Mais
        <img src={buttonArrow} className="clientes__button__icon" />
      </Link>
    </div>
  );
};

export default Clientes;
