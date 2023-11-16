import "./sass/Proposito.css"

const Proposito = () => {
  return (
    <div className="proposito-desk">
      <div className="proposito__header">
        <h4 className="proposito__title2">Propósito</h4>
        <div className="proposito__text">
          <h3 className="proposito__maintitle">
            Nossos <span className="text-highlight">diferenciais</span>
          </h3>
          <p className="proposito__paragraph">
            Nosso propósito é promover o aculturamento digital, garantindo a
            sinergia entre as áreas e gerando assim um posicionamento
            estratégico que se destaca pela diferenciação e resultados reais.
          </p>
        </div>
      </div>
      <div className="proposito__cards">
        <div className="proposito__card proposito__card1">
          <p className="proposito__card__number">1</p>
          <p className="proposito__card__text">
            Modelo boutique com consultor dedicado do início ao fim do projeto.
          </p>
        </div>
        <div className="proposito__card proposito__card2">
          <p className="proposito__card__number">2</p>
          <p className="proposito__card__text">
            Projetos personalizados de acordo com a necessidade de cada empresa.
          </p>
        </div>
        <div className="proposito__card proposito__card3">
          <p className="proposito__card__number">3</p>
          <p className="proposito__card__text">
            Profissionais com experiência prática em operações online.
          </p>
        </div>
        <div className="proposito__card proposito__card4">
          <p className="proposito__card__number">4</p>
          <p className="proposito__card__text">
            Orientado à resultados de forma consistente e rentável.
          </p>
        </div>
        <div className="proposito__card proposito__card5">
          <p className="proposito__card__number">5</p>
          <p className="proposito__card__text">Respeito a cultura e legado.</p>
        </div>
      </div>
    </div>
  );
};

export default Proposito;
