import "./sass/Banner.css";
import { Link } from "react-router-dom";
import bgImage from "../../../../assets/imagens/banner/bannerDesk.svg";
import buttonArrow from "../../../../assets/imagens/icons/buttonArrow.svg";

const Banner = () => {
  return (
    <>
      <div className="banner-desk">
        <div className="banner__content">
          <h3 className="banner__maintitle">
            <span className="text-highlight">Consultoria estratégica</span> para
            estruturar e acelerar sua operação de
            <span className="text-highlight"> e-commerce e marketplace</span>
          </h3>

          <Link to="/quem-somos" className="banner__mainbutton">
            <p className="banner__button__text">Saiba Mais</p>
            <img src={buttonArrow} className="banner__button__icon" alt=""/>
          </Link>
        </div>
        <img src={bgImage} className="banner__bg" />
      </div>
    </>
  );
};

export default Banner;
