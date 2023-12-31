import { Link } from "react-router-dom";
import LogoBravaVerde from "../../../assets/imagens/logo/logoBravaVerde.svg";
import "./sass/HeaderDesk.scss";
import { useState, useEffect } from "react";

const HeaderDesk = () => {
  const [scrolledDown, setScrolledDown] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY ? setScrolledDown(true) : setScrolledDown(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!scrolledDown) {
    return (
      <>
        <div className="header__fixed">
          <div className="header__container__fixed-desk">
            <Link to="/">
              <img src={LogoBravaVerde} alt="Logo Brava" />
            </Link>
            <div className="menu__body-desk">
              <ul className="menu__body-nav">
                <li>
                  <Link className="menu__link-desk" to="/quem-somos">
                    Quem Somos
                  </Link>
                </li>
                <li>
                  <Link className="menu__link-desk" to="/o-que-fazemos">
                    O que fazemos
                  </Link>
                </li>
                <li>
                  <Link className="menu__link-desk" to="/nossos-clientes">
                    Nossos clientes
                  </Link>
                </li>
                <li>
                  <Link className="menu__link-desk" to="/entre-em-contato">
                    Entre em contato
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="header">
        <div className="header__container-desk">
          <Link to="/">
            <img src={LogoBravaVerde} alt="Logo Brava" />
          </Link>
          <div className="menu__body-desk">
          <ul className="menu__body-nav">
                <li>
                  <Link className="menu__link-desk" to="/quem-somos">
                    Quem Somos
                  </Link>
                </li>
                <li>
                  <Link className="menu__link-desk" to="/o-que-fazemos">
                    O que fazemos
                  </Link>
                </li>
                <li>
                  <Link className="menu__link-desk" to="/nossos-clientes">
                    Nossos clientes
                  </Link>
                </li>
                <li>
                  <Link className="menu__link-desk" to="/entre-em-contato">
                    Entre em contato
                  </Link>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderDesk;
