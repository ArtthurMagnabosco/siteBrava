import { Link } from "react-router-dom";
import "./sass/Footer.css";
import logoInstagram from "../../../assets/imagens/icons/instagramVanilla.svg";
import logoFacebook from "../../../assets/imagens/icons/facebookVanilla.svg";
import logoLinkedin from "../../../assets/imagens/icons/linkedinVanilla.svg";
import LogoBravaDesk from "../../../assets/imagens/logo/logoBravaFooterDesk.svg";

const FooterDesk = () => {
  return (
    <footer className="footer-desk">
      <div className="footer1">
        <div className="footer__section">
          <h5 className="footer__title">Explore</h5>
          <ul className="footer__section__list">
            <li>
              <Link className="footer__link" to="/quem-somos">
                Quem somos
              </Link>
            </li>
            <li>
              <Link className="footer__link" to="/o-que-fazemos">
                O que fazemos
              </Link>
            </li>
            <li>
              <Link className="footer__link" to="/nossos-clientes">
                Nossos clientes
              </Link>
            </li>
            <li>
              <Link className="footer__link" to="/entre-em-contato">
                Entre em contato
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h5 className="footer__title">Telefone</h5>
          <a href="tel:+555422220235" className="footer__text">
            +55 (54) 2222-0235
          </a>
        </div>
        <div className="footer__section">
          <h5 className="footer__title">Endereço</h5>
          <address className="footer__text">
            R. Olavo Bilac, 503 - sala 4 - Rio Branco, <br />
            Caxias do Sul - RS, 95010-080
          </address>
        </div>
        <div className="footer__section">
          <h5 className="footer__title">Conecte-se</h5>
          <ul className="footer__social__list">
            <li>
              <Link
                target="_blank"
                to="https://www.instagram.com/brava.digital/"
              >
                <img src={logoInstagram} alt="Instagram da Brava" />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                to="https://www.facebook.com/bravaconsultoria"
              >
                <img src={logoFacebook} alt="Facebook da Brava" />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                to="https://www.linkedin.com/company/brava-consultoria-ecommerce"
              >
                <img src={logoLinkedin} alt="LinkedIn da Brava" />
              </Link>
            </li>
          </ul>
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
    </footer>
  );
};

export default FooterDesk;
