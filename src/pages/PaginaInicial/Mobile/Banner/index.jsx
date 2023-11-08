import "./sass/Banner.scss";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <h3 className="maintitle">
          <span className="text-highlight">Consultoria estratégica</span> para
          estruturar e acelerar sua operação de{" "}
          <span className="text-highlight">e-commerce e marketplace</span>
        </h3>

        <Link to="/quem-somos">
          <button className="mainbutton">
            <p>Saiba Mais</p>
          </button>
        </Link>
      </div>
      <div className="background"></div>
    </>
  );
};

export default Banner;
