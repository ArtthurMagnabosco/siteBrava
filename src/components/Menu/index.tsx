import Link from "next/link";
import LogoBravaBranco from "../../assets/imagens/logo/logoBravaBranco.svg";
import IconX from "../../assets/imagens/icons/iconX.svg";
import IconFlecha from "../../assets/imagens/icons/icon-flecha.svg";
import "./sass/Menu.scss";
import Image from "next/image";

const Menu = ({ closeMenu }) => {
  return (
    <div className="menu__container">
      <div className="menu__header">
        <Link href="/">
          <Image
            src={LogoBravaBranco}
            alt="Logo Brava"
            onClick={() => closeMenu()}
            className="menu__header__logo"
          />
        </Link>
        <Image src={IconX} alt="Fechar menu" onClick={() => closeMenu()} className="menu__header__closebtn" />
      </div>
      <ul className="menu__body-nav">
        <li>
          <Link
            onClick={() => closeMenu()}
            className="menu__body__link"
            href="/quem-somos"
          >
            Quem Somos
          </Link>
        </li>
        <li>
          <Link
            onClick={() => closeMenu()}
            className="menu__body__link"
            href="/o-que-fazemos"
          >
            O que fazemos
          </Link>
        </li>
        <li>
          <Link
            onClick={() => closeMenu()}
            className="menu__body__link"
            href="/nossos-clientes"
          >
            Nossos clientes
          </Link>
        </li>
        <li>
          <Link
            onClick={() => closeMenu()}
            className="menu__body__link"
            href="/entre-em-contato"
          >
            Entre em contato
          </Link>
        </li>
      </ul>
      <div className="menu__footer">
        <p className="menu__subtitle">ENDEREÇO</p>
        <p className="menu__footer__text">
          R. Olavo Bilac, 503 - sala 4 - Rio Branco, Caxias do Sul - RS,
          95010-080
        </p>
        <p className="menu__subtitle">REDES SOCIAIS</p>
        <div className="menu__redes-sociais">
          <a
            className="menu__footer__text redes__sociais"
            href="https://www.instagram.com/brava.digital/"
            target="_blank"
          >
            Instagram <Image src={IconFlecha} alt="" />
          </a>
          <a
            className="menu__footer__text redes__sociais"
            href="https://www.linkedin.com/company/brava-consultoria-ecommerce/"
            target="_blank"
          >
            Linkedin <Image src={IconFlecha} alt="" />
          </a>
          <a
            className="menu__footer__text"
            href="https://www.facebook.com/bravaconsultoria"
            target="_blank"
          >
            Facebook <Image src={IconFlecha} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
