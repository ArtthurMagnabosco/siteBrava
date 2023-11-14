import "./sass/Banner.scss";
import bgImage from "../../../../assets/imagens/banner/bannerMobile.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner__content">
          <h3 className="banner__maintitle">
            <span className="text-highlight">Consultoria estratégica</span> para
            estruturar e acelerar sua operação de
            <span className="text-highlight"> e-commerce e marketplace</span>
          </h3>

          <Link to="/quem-somos" className="banner__mainbutton">
            <p>Saiba Mais</p>
          </Link>
        </div>
        <img src={bgImage} className="banner__bg" />
      </div>
    </>
  );
};

export default Banner;
