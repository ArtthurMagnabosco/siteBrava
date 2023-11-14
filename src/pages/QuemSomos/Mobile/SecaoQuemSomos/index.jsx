import "./sass/SecaoQuemSomos.scss";
import LogoBravaCinza from "../../../../assets/imagens/logo/LogoBravaCinza.svg";
import LogoConverte from "../../../../assets/imagens/logo/LogoConverte.svg";
import LogoWecode from "../../../../assets/imagens/logo/LogoWecode.svg";

const SecaoQuemSomos = () => {
  return (
    <div className="quem-somos__container">
      <div className="quem-somos__header">
        <h4 className="header__title2">Quem somos</h4>
        <h3 className="header__title1">
          Valorizamos <span className="text-highlight">pessoas</span> e
          impulsionamos <span className="text-highlight">negócios</span>
        </h3>
        <p className="header__text1">
          Somos um grupo que oferece diferentes soluções para diferentes
          necessidades, dentro do ecossistema do mercado digital.
        </p>
      </div>
      <div className="quem-somos__body">
        <div className="body__company">
          <div className="body__company__logo">
            <img src={LogoBravaCinza} alt="Logo Brava Cinza" />
          </div>
          <div className="body__company__info">
            <p className="body__company__title">Consultoria</p>
            <p className="body__company__text">
              Especializada em implantação, diagnóstico e evolução de projetos
              de e-commerce e marketplace.
            </p>
          </div>
        </div>
        <div className="body__company">
          <div className="body__company__logo">
            <img src={LogoConverte} alt="Logo Brava Cinza" />
          </div>
          <div className="body__company__info">
            <p className="body__company__title">Educação</p>
            <p className="body__company__text">
              Cursos in company para o mercado de e-commerce, marketplace e
              marketing digital
            </p>
          </div>
        </div>
        <div className="body__company">
          <div className="body__company__logo">
            <img src={LogoWecode} alt="Logo Brava Cinza" />
          </div>
          <div className="body__company__info">
            <p className="body__company__title">Tecnologia</p>
            <p className="body__company__text">
              Certificada em implantação, migração e suporte da plataforma VTEX
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecaoQuemSomos;
