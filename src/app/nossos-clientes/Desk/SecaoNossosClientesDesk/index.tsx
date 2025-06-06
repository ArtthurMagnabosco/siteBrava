'use client';

import "./sass/SecaoNossosClientesDesk.scss";
import Image from "next/image";
import { Svg1, Svg2, Svg3, Svg4, Svg5, Svg6, Svg7, Svg8, Svg9, Svg10, Svg11, Svg12, Svg13, Svg14, Svg15, Svg16, Svg17, Svg18, Svg19, Svg20, Svg21, Svg22, Svg23, Svg24, Svg25, Svg26, Svg27, Svg28, Svg29, Svg30, Svg31, Svg32, Svg33, Svg34, Svg35, Svg36, Svg37, Svg38, Svg39, Svg40, Svg41, Svg42, Svg43, Svg44, Svg45, Svg46, Svg47, Svg48, Svg49, Svg50, Svg51, Svg52, Svg53, Svg54, Svg55 } from "@/components/svgs/Svgs";
import Link from "next/link";

const SecaoNossosClientesDesk = ({ Home }: { Home: boolean }) => {
  // Ajuste os caminhos das imagens conforme necessário
  const logopolitorno = "/assets/imagens/logoClientes/neutro/logopolitorno.png";
  const logokappesberg = "/assets/imagens/logoClientes/neutro/logokappesberg.png";
  const logokissny = "/assets/imagens/logoClientes/neutro/logokissny.png";

  // Função de scroll fictícia, ajuste conforme necessário


  return (
    <div className="ourClients">
      <div className="ourClientsContainer">
        <h3 className="tag">NOSSOS CLIENTES</h3>
        <h2 className="blockTitle">
          Quem <span className="textHighlight">confia</span> em nosso
          trabalho e <span className="textHighlight">atesta</span>{" "}
          nossa qualidade
          {/* Fazemos parte de um grupo que oferece diferentes{" "}
          <span className="textHighlight"> soluções </span> para
          diferentes
          <span className="textHighlight"> necessidades</span>, dentro
          do ecossistema do mercado digital.{" "}
          <span className="textHighlight">
            Conheça nossos clientes
          </span> */}
        </h2>
        <div className="clientList">
          <div>
            <Svg55></Svg55>
          </div>
          <div>
            <Image
              width="80"
              height="18"
              src={logokappesberg}
              alt="logo-kappesberg"
            ></Image>
          </div>
          <div>
            <Svg1 />
          </div>
          <div>
            <Svg2 />
          </div>
          <div>
            <Svg3 />
          </div>
          <div>
            <Svg4 />
          </div>
          <div>
            <Svg5 />
          </div>
          <div>
            <Svg6 />
          </div>
          <div>
            <Svg7 />
          </div>
          <div>
            <Svg8 />
          </div>
          <div>
            <Svg9 />
          </div>
          <div>
            <Svg10 />
          </div>
          <div>
            <Image
              width="65"
              height="25"
              src={logokissny}
              alt="logo-kiss-new-york"
            ></Image>
          </div>
          <div>
            <Svg11 />
          </div>
          <div>
            <Svg12 />
          </div>
          <div>
            <Svg13 />
          </div>
          <div>
            <Svg14 />
          </div>
          <div>
            <Svg15 />
          </div>
          <div>
            <Svg16 />
          </div>
          <div>
            <Svg17 />
          </div>
          <div>
            <Svg18 />
          </div>
          <div>
            <Svg19 />
          </div>
          <div>
            <Svg20 />
          </div>
          <div>
            <Svg21 />
          </div>
          <div>
            <Svg22 />
          </div>
          <div>
            <Svg23 />
          </div>
          <div>
            <Svg24 />
          </div>
          <div>
            <Svg32 />
          </div>
          <div>
            <Svg33 />
          </div>
          {/* <div>
                  <Svg34 />
                </div> */}
          <div>
            <Svg35 />
          </div>
          <div>
            <Svg36 />
          </div>
          <div>
            <Svg37 />
          </div>
          <div>
            <Svg38 />
          </div>
          <div>
            <Svg39 />
          </div>
          <div>
            <Svg40 />
          </div>
          <div>
            <Svg41 />
          </div>
          <div>
            <Svg42 />
          </div>
          <div>
            <Svg43 />
          </div>
          <div>
            <Svg44 />
          </div>
          <div>
            <Svg45 />
          </div>
          <div>
            <Svg46 />
          </div>
          <div>
            <Svg47 />
          </div>
          <div>
            <Svg48 />
          </div>
          <div>
            <Svg49 />
          </div>
          <div>
            <Svg50 />
          </div>
          <div>
            <Svg51 />
          </div>
          <div>
            <Svg52 />
          </div>
          <div>
            <Svg53 />
          </div>
          <div>
            <Svg54 />
          </div>
        </div>
        {Home && (
          <Link href="/nossos-clientes" className="knowMoreLink">
            Saiba mais
            <svg
              className="knowMoreArrow"
              width="10"
              height="9"
              viewBox="0 0 10 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.50714 0.690607C5.44019 0.752599 5.38706 0.826354 5.35079 0.907616C5.31453 0.988879 5.29586 1.07604 5.29586 1.16407C5.29586 1.25211 5.31453 1.33927 5.35079 1.42053C5.38706 1.50179 5.44019 1.57555 5.50714 1.63754L7.85714 3.83149L0.714286 3.83149C0.524845 3.83149 0.343164 3.90175 0.20921 4.02681C0.075255 4.15187 0 4.32148 0 4.49834C0 4.67521 0.075255 4.84482 0.20921 4.96988C0.343164 5.09494 0.524845 5.1652 0.714286 5.1652H7.85714L5.50714 7.35915C5.44019 7.42114 5.38706 7.4949 5.35079 7.57616C5.31453 7.65742 5.29586 7.74458 5.29586 7.83262C5.29586 7.92065 5.31453 8.00781 5.35079 8.08907C5.38706 8.17034 5.44019 8.24409 5.50714 8.30608C5.64097 8.43029 5.82201 8.5 6.01071 8.5C6.19942 8.5 6.38046 8.43029 6.51429 8.30608L9.57857 5.43861C9.84685 5.18964 9.99841 4.8515 10 4.49834C9.99652 4.14751 9.84511 3.81208 9.57857 3.56475L6.51429 0.697274C6.3814 0.572182 6.20089 0.501266 6.01219 0.500017C5.82348 0.498767 5.64191 0.567286 5.50714 0.690607Z"
                fill="white"
              />
            </svg>
          </Link>
        )}
      </div >
    </div >
  );
};

export default SecaoNossosClientesDesk;
