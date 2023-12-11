import { Swiper, SwiperSlide } from "swiper/react";
import "./sass/Depoimentos.css";
import videoTeste from "../../../assets/videos/video-teste.mp4";

const DepoimentosMobile = () => {
  return (
    <section className="depoimentos-desk">
      <div className="depoimentos__header">
        <p className="depoimentos__title2">Depoimentos</p>
        <h2 className="depoimentos__maintitle">
          Confira alguns <span className="text-highlight">depoimentos</span> de
          nossos clientes
        </h2>
      </div>
      <div className="depoimentos__content">
        <Swiper spaceBetween={12} className="depoimentos__swiper" slidesPerView={1}>
          <SwiperSlide className="depoimentos__card">
            <div className="depoimentos__card__title">
              <p className="depoimentos__card__name">Fernanda L.</p>
              <p className="depoimentos__card__desc">
                CEO <b>·</b> PICCADILLY
              </p>
            </div>
            <video className="depoimentos__card__video" controls>
              <source src={videoTeste} type="video/mp4"></source>
            </video>
            <div className="depoimentos__card__text">
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
              itaque reiciendis. Porro doloremque deserunt sequi, ipsam corrupti
              vitae molestiae harum architecto non nulla sed saepe voluptatum.
              Voluptates soluta cum dolores!"
            </div>
          </SwiperSlide>
          <SwiperSlide className="depoimentos__card">
            <div className="depoimentos__card__title">
              <p className="depoimentos__card__name">Fernanda L.</p>
              <p className="depoimentos__card__desc">
                CEO <b>·</b> PICCADILLY
              </p>
            </div>
            <video className="depoimentos__card__video" controls>
              <source src={videoTeste} type="video/mp4"></source>
            </video>
            <div className="depoimentos__card__text">
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
              itaque reiciendis. Porro doloremque deserunt sequi, ipsam corrupti
              vitae molestiae harum architecto non nulla sed saepe voluptatum.
              Voluptates soluta cum dolores!"
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default DepoimentosMobile;
