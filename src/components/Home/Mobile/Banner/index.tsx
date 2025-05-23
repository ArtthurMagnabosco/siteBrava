'use client';

import "./sass/Banner.scss";
import bgImage from "../../../../../public/assets/imagens/banner/bannerMobile.png";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner__content">
          <h1 className="banner__maintitle">
            <span className="text-highlight">Consultoria estratégica</span> para
            estruturar e acelerar sua operação de {" "}
            <span className="text-highlight"><br></br>e-commerce e marketplace</span>
          </h1>

          <Link href="/quem-somos" className="banner__mainbutton">
            Saiba Mais
          </Link>
        </div>
        <Image src={bgImage} alt="" className="banner__bg" />
      </div>
    </>
  );
};

export default Banner;
