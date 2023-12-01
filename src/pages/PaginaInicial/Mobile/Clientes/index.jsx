import { Link } from "react-router-dom";
import "./sass/Clientes.css";
import { logosClientes } from "../../sliderClientes/logosClientes";

const Clientes = () => {
  return (
    <div className="home__clientes">
      <div className="clientes__titles">
        <p className="clientes__title2">Nossos clientes</p>
        <h2 className="clientes__title1">
          Quem <span className="text-highlight">confia </span>
          em nosso trabalho e <span className="text-highlight">atesta </span>
          nossa qualidade
        </h2>
      </div>
      <div className="clientes__brands">
        <div className="clientes__slider">
          {logosClientes.group1.map((logo, index) => (
            <img src={logo} key={index} />
          ))}
        </div>

        <div className="clientes__slider clientes__slider-reverse">
          {logosClientes.group2.map((logo, index) => (
            <img src={logo} key={index} />
          ))}
        </div>

        <div className="clientes__slider">
          {logosClientes.group3.map((logo, index) => (
            <img src={logo} key={index} />
          ))}
        </div>
      </div>

      <Link to="/nossos-clientes" className="clientes__mainbutton">
        Saiba Mais
      </Link>
    </div>
  );
};

export default Clientes;
