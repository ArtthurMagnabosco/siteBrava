import "./sass/Clientes.css";
import { Link } from "react-router-dom";
import { logosClientesDesk } from "../../sliderClientes/logosClientes";
import buttonArrow from "../../../../assets/imagens/icons/buttonArrow.svg"

const Clientes = () => {
  return (
    <div className="home__clientes-desk">
      <div className="clientes__titles">
        <h4 className="clientes__title2">Nossos clientes</h4>
        <h3 className="clientes__title1">
          Quem <span className="text-highlight">confia </span>
          em nosso trabalho e <span className="text-highlight">atesta </span>
          nossa qualidade
        </h3>
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
        <p className="clientes__button__text">Saiba Mais</p>
        <img src={buttonArrow} className="clientes__button__icon" />
      </Link>
    </div>
  );
};

export default Clientes;
