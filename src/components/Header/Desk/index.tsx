'use client';


import Link from "next/link";
import LogoBravaVerde from "../../../../public/assets/imagens/logo/logoBravaVerde.svg";
import "./sass/HeaderDesk.scss";
import { useState, useEffect } from "react";
import Image from "next/image";

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
            <Link href="/">
              <Image src={LogoBravaVerde} alt="Logo Brava" />
            </Link>
            <div className="menu__body-desk">
              <ul className="menu__body-nav">
                <li>
                  <Link className="menu__link-desk" href="/quem-somos">
                    Quem Somos
                  </Link>
                </li>
                <li>
                  <Link className="menu__link-desk" href="/o-que-fazemos">
                    O que fazemos
                  </Link>
                </li>
                <li>
                  <Link className="menu__link-desk" href="/nossos-clientes">
                    Nossos clientes
                  </Link>
                </li>
                <li>
                  <Link className="menu__link-desk" href="/entre-em-contato">
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
          <Link href="/">
            <Image src={LogoBravaVerde} alt="Logo Brava" />
          </Link>
          <div className="menu__body-desk">
          <ul className="menu__body-nav">
                <li>
                  <Link className="menu__link-desk" href="/quem-somos">
                    Quem Somos
                  </Link>
                </li>
                <li>
                  <Link className="menu__link-desk" href="/o-que-fazemos">
                    O que fazemos
                  </Link>
                </li>
                <li>
                  <Link className="menu__link-desk" href="/nossos-clientes">
                    Nossos clientes
                  </Link>
                </li>
                <li>
                  <Link className="menu__link-desk" href="/entre-em-contato">
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
