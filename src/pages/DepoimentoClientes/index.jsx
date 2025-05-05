import { useState, useEffect } from 'react';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';
import "./sass/styles.css";

//Profile pic
import felipeFarina from "../../assets/imagens/client-profile-pic/felipe-carraro-photo.png"
// import priscilaBaum from "../../assets/imagens/client-profile-pic/priscila-baum-photo.png";s
import giulianoBettanin from "../../assets/imagens/client-profile-pic/giuliano-inbetta.png";
// import viniciusMartini from "../../assets/imagens/client-profile-pic/vinicius-ou-photo.png";
import liliamMantovani from "../../assets/imagens/client-profile-pic/liliam-keko-photo.png";
import svenStihlPhoto from "../../assets/imagens/client-profile-pic/sven-stihl-photo.png";

//Videos
import felipeHorizontal from "../../assets/imagens/videos/depoimentos/felipe-carraro-horizontal.mp4"
import felipeVertical from "../../assets/imagens/videos/depoimentos/felipe-carraro-vertical.mp4"

// import priscilaHorizontal from "../../assets/imagens/videos/depoimentos/priscila-piccaddily-horizontal.mp4"
// import priscilaVertical from "../../assets/imagens/videos/depoimentos/priscila-piccaddily-vertical.mp4"

import giulianoHorizontal from "../../assets/imagens/videos/depoimentos/giuliano-bettanin-horizontal.mp4"
import giulianoVertical from "../../assets/imagens/videos/depoimentos/giuliano-bettanin-vertical.mp4"

// import viniciusHorizontal from "../../assets/imagens/videos/depoimentos/vinicius-ou-horizontal.mp4"
// import viniciusVertical from "../../assets/imagens/videos/depoimentos/vinicius-ou-vertical.mp4"

import liliamDepoimento from "../../assets/imagens/videos/depoimentos/liliam-keko.mp4"

import svenStihl from "../../assets/imagens/videos/depoimentos/sven-vanessa-stihl.mp4"

//svg
import playDepoimentos from "../../assets/imagens/svg/play.svg"
import fecharModal from "../../assets/imagens/svg/fechar-modal.svg"

const testimonials = [
  {
    name: 'Liliam Mantovani',
    position: 'Gerente de Marketing da Keko',
    image: liliamMantovani,
    testimonial: '&quotEu mais do que aconselho a consultoria da Brava <span>com certeza foi um investimento acertado</span>.&quot',
    video: {
      horizontal: liliamDepoimento,
      vertical: liliamDepoimento,
    }
  },
  {
    name: 'Felipe Farina',
    position: 'Gerente de E-commerce da Carraro',
    image: felipeFarina,
    testimonial: '&quotA consultoria nos ajudou muito desde o princípio, quando eles fizeram uma <span>imersão na empresa</span>, para <span>mapear todas as áreas</span> e todos os pontos críticos. Até o pós GO Live do projeto.&quot',
    video: {
      horizontal: felipeHorizontal,
      vertical: felipeVertical,
    }
  },
  // {
  //   name: 'Priscila Baum',
  //   position: 'Gerente de E-commerce da PICCADILLY',
  //   image: priscilaBaum,
  //   testimonial: '&quotA consultoria da Brava trouxe a <span>expertise de estratégias do digital</span> para reestruturar o e-commerce, nos últimos anos, e <span>alavancar os resultados</span> de uma forma mais rápida na empresa, seguindo todos os desafios que a gente tinha na área.&quot',
  //   video: {
  //     horizontal: priscilaHorizontal,
  //     vertical: priscilaVertical,
  //   }
  // },
  {
    name: 'Giuliano Bettanin',
    position: 'Gestor dos Canais Digitais da InBetta',
    image: giulianoBettanin,
    testimonial: '&quotQuando a gente fala de e-commerce a primeira coisa que tem que andar em conjunto no projeto é a <span>cultura dos funcionários</span> com o canal digital. A Brava nos ajudou a desenvolver todo <span>o modelo de negócio e alinhar as expectativas</span> entre todas as áreas e colaboradores.&quot',
    video: {
      horizontal: giulianoHorizontal,
      vertical: giulianoVertical,
    }
  },
  // {
  //   name: 'Vinícius Martini',
  //   position: 'Gerente de Marketing da Martiplast',
  //   image: viniciusMartini,
  //   testimonial: '&quotA gente foi atrás de uma consultoria para <span>nos apoiar a acelerar esse desenvolvimento</span>, tanto de conhecimento, tanto de <span>aculturar</span> um pouco mais a empresa. Não só no como implementar um e-commerce, mas os benefícios disso.&quot',
  //   video: {
  //     horizontal: viniciusHorizontal,
  //     vertical: viniciusVertical,
  //   }
  // },
  {
    name: 'Sven Laure',
    position: 'Head of Marketing Systems & E-Commerce',
    image: svenStihlPhoto,
    testimonial: '&quotA nossa experiência foi fantástica, e a gente entende como <span>um marco na história da STIHL.</span>&quot',
    video: {
      horizontal: svenStihl,
      vertical: svenStihl,
    }
  },
];

export const TestimonialSlider = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);

  const openModal = (videoUrl) => {
    setVideoSrc(videoUrl);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
    setVideoSrc('');
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      setVideoSrc(''); // limpa o estado ao desmontar
    };
  }, []);

  const settings = {
    centerMode: true,
    dots: false,
    centerPadding: '20px',
    slidesToShow: 3,
    arrows: true,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '60px',
          slidesToShow: 1.02,
          centerMode: true,
          arrows: false
        }
      }
    ]
  };

  return (
    <div className={'testimony-main-container'}>
      <div className={'testimony-titles-container'}>
        <h2 className={'testimony-title'}>Depoimentos</h2>
        <h3 className={'testimony-subtitle'}>Confira alguns <span>depoimentos</span> de nossos clientes</h3>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <div className="testimonial-content">
              <div className={'testimonial-profile'}>
                {/* Renderiza a imagem somente se estiver disponível */}
                {testimonial.image && <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />}
                <div className='testimonial-name-position'>
                  <h3 className={'testimonial-name'}>{testimonial.name}</h3>
                  <p className={'testimonial-position'}>{testimonial.position}</p>
                </div>
              </div>
              <div className={'testimonial-desciption'}>
                {/* Renderiza o depoimento */}
                <p className={'testimonial-description-content'} dangerouslySetInnerHTML={{ __html: testimonial.testimonial }} />
              </div>
              <div className={'testimonial-video'}>
                {/* Renderiza o botão do vídeo somente se o vídeo estiver disponível */}
                {testimonial.video && (
                  <button onClick={() => openModal(isMobile ? testimonial.video.vertical : testimonial.video.horizontal)} className={'testimonial-button-video'}>
                    Assistir depoimento <img src={playDepoimentos} alt="" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        contentLabel="Vídeo do Depoimento"
      >
        <div
          className="modal-content-inner"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={closeModal} className="modal-close-button"><img src={fecharModal} alt="" /></button>
    
          <iframe
            src={videoSrc}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Depoimento em Vídeo"
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default TestimonialSlider;