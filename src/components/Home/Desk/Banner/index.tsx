'use client';

import "./sass/Banner.css";
import bgImage from "../../../../../public/assets/imagens/banner/bannerDesk.svg";
import buttonArrow from "../../../../../public/assets/imagens/icons/buttonArrow.svg";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="banner-desk">
        <div className="banner__content">
          <h1 className="banner__maintitle">
            <span className="text-highlight">Consultoria estratégica</span> para
            estruturar e acelerar sua operação de
            <span className="text-highlight"> e-commerce e marketplace</span>
          </h1>

          <Link href="/quem-somos" className="banner__mainbutton">
            Saiba Mais
            <Image src={buttonArrow} className="banner__button__icon" alt=""/>
          </Link>
        </div>
        <Image src={bgImage} className="banner__bg" alt=""/>
      </div>
    </>
  );
};

export default Banner;
