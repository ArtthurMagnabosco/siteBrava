import Link from "next/link";
import "./sass/Footer.css";
import logoInstagram from "../../../../public/assets/imagens/icons/instagramVanilla.svg";
import logoFacebook from "../../../../public/assets/imagens/icons/facebookVanilla.svg";
import logoLinkedin from "../../../../public/assets/imagens/icons/linkedinVanilla.svg";
import LogoBravaDesk from "../../../../public/assets/imagens/logo/logoBravaFooterDesk.svg";
import Image from "next/image";

const FooterDesk = () => {
  return (
    <footer className="footer-desk">
      <div className="footer1">
        <div className="footer__section">
          <h5 className="footer__title">Explore</h5>
          <ul className="footer__section__list">
            <li>
              <Link className="footer__link" href="/quem-somos">
                Quem somos
              </Link>
            </li>
            <li>
              <Link className="footer__link" href="/o-que-fazemos">
                O que fazemos
              </Link>
            </li>
            <li>
              <Link className="footer__link" href="/nossos-clientes">
                Nossos clientes
              </Link>
            </li>
            <li>
              <Link className="footer__link" href="#contato">
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
                href="https://www.instagram.com/brava.digital/"
              >
                <Image src={logoInstagram} alt="Instagram da Brava" />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://www.facebook.com/bravaconsultoria"
              >
                <Image src={logoFacebook} alt="Facebook da Brava" />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/brava-consultoria-ecommerce"
              >
                <Image src={logoLinkedin} alt="LinkedIn da Brava" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer2">
        <Link href="/">
          <Image src={LogoBravaDesk} alt="Logo Brava" />
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
