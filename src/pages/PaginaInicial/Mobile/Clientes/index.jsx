import { Link } from "react-router-dom";
import "./sass/Clientes.css";

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
      <div className="clientes__brands"></div>

      <Link to="/nossos-clientes" className="clientes__mainbutton">
        <p>Saiba Mais</p>
      </Link>
    </div>
  );
};

export default Clientes;
