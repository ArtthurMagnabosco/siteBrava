import { Link } from "react-router-dom";
import "./sass/Clientes.css";
import { logosClientes } from "../../sliderClientes/logosClientes";

const Clientes = () => {
  return (
    <div className="home__clientes">
      <div className="clientes__titles">
        <h4 className="clientes__title2">Nossos clientes</h4>
        <h3 className="clientes__title1">
          Quem <span className="text-highlight">confia </span>
          em nosso trabalho e <span className="text-highlight">atesta </span>
          nossa qualidade
        </h3>
      </div>
      <div className="clientes__brands">
        <div className="clientes__roller">
          {logosClientes.group1.map((logo, index) => (
            <img src={logo} key={index} />
          ))}
        </div>

        <div className="clientes__roller clientes__roller-right">
          {logosClientes.group2.map((logo, index) => (
            <img src={logo} key={index} />
          ))}
        </div>

        <div className="clientes__roller">
          {logosClientes.group3.map((logo, index) => (
            <img src={logo} key={index} />
          ))}
        </div>
      </div>

      <Link to="/nossos-clientes" className="clientes__mainbutton">
        <p>Saiba Mais</p>
      </Link>
    </div>
  );
};

export default Clientes;
