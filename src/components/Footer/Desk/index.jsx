import { Link } from "react-router-dom";
import "./sass/Footer.css";
import logoInstagram from "../../../assets/imagens/icons/instagramVanilla.svg";
import logoFacebook from "../../../assets/imagens/icons/facebookVanilla.svg";
import logoLinkedin from "../../../assets/imagens/icons/linkedinVanilla.svg";
import LogoBravaDesk from "../../../assets/imagens/logo/logoBravaFooterDesk.svg";

const FooterDesk = () => {
  return (
    <div className="footer-desk">
      <div className="footer1">
        <div className="footer__section">
          <h4 className="footer__title">Explore</h4>
          <Link className="footer__link" to="/quem-somos">
            Quem somos
          </Link>
          <Link className="footer__link" to="/o-que-fazemos">
            O que fazemos
          </Link>
          <Link className="footer__link" to="/nossos-clientes">
            Nossos clientes
          </Link>
          <Link className="footer__link" to="/contato">
            Entre em contato
          </Link>
        </div>
        <div className="footer__section">
          <h4 className="footer__title">Telefone</h4>
          <p className="footer__text">+55 (54) 2222-0235</p>
        </div>
        <div className="footer__section">
          <h4 className="footer__title">Endereço</h4>
          <address className="footer__text">
            R. Olavo Bilac, 503 - sala 4 - Rio Branco, <br />
            Caxias do Sul - RS, 95010-080
          </address>
        </div>
        <div className="footer__section">
          <h4 className="footer__title">Conecte-se</h4>
          <div className="footer__social">
            <Link to="https://www.instagram.com/brava.digital/">
              <img src={logoInstagram} alt="Instagram da Brava" />
            </Link>
            <Link to="https://www.facebook.com/bravaconsultoria">
              <img src={logoFacebook} alt="Facebook da Brava" />
            </Link>
            <Link to="https://www.linkedin.com/company/brava-consultoria-ecommerce">
              <img src={logoLinkedin} alt="LinkedIn da Brava" />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer2">
        <Link to="/">
          <img src={LogoBravaDesk} alt="Logo Brava" />
        </Link>
        <address className="footer2__text">
          BRAVA Consultoria em E-commerce - R. Olavo Bilac, 503 - sala 4 - Rio
          Branco, Caxias do Sul - RS, 95010-080
        </address>
      </div>
    </div>
  );
};

export default FooterDesk;
