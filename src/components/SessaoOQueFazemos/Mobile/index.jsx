import "./sass/SessaoOQueFazemos.css";
import B2CIcon from "../../../assets/imagens/icons/B2C.svg";
import D2CIcon from "../../../assets/imagens/icons/D2C.svg";
import B2BIcon from "../../../assets/imagens/icons/B2B.svg";
import omnichannelIcon from "../../../assets/imagens/icons/omnichannel.svg";
import inOutIcon from "../../../assets/imagens/icons/in-out.svg";
import implantacaoPhoto from "../../../assets/imagens/fotos/implantacao.png";
import reestruturacaoPhoto from "../../../assets/imagens/fotos/reestruturacao.png";
import aceleracaoPhoto from "../../../assets/imagens/fotos/aceleracao.png";
import cursosInCompanyPhoto from "../../../assets/imagens/fotos/cursosInCompany.png";
import diagnosticoPhoto from "../../../assets/imagens/fotos/diagnostico.png";

const SessaoOQueFazemos = () => {
  return (
    <div className="oq-fazemos">
      <h4 className="oq-fazemos__title2">O que fazemos</h4>
      <div className="oq-fazemos__text">
        <h3 className="oq-fazemos__maintitle">
          Cada empresa possui características próprias, que demandam{" "}
          <span className="text-highlight">estratégias específicas.</span>
        </h3>
        <p className="oq-fazemos__paragraph">
          Atuamos com todos os formatos de operação, oferecendo diferentes
          soluções de acordo com o momento de cada empresa.
        </p>
      </div>

      <div className="modelos-negocio">
        <h4 className="modelos__title">Modelos de Negócio</h4>
        <div className="modelos__card">
          <div className="modelos__header">
            <img src={B2CIcon} alt="" />
            <h5 className="modelos__header__text">
              Business to consumer (B2C)
            </h5>
          </div>
          <p className="modelos__body__text">
            Modelo de negócio no qual a venda é diretamente da empresa para o
            consumidor final.
          </p>
        </div>
        <div className="modelos__card">
          <div className="modelos__header">
            <img src={D2CIcon} alt="" />
            <h5 className="modelos__header__text">Direct to consumer (D2C)</h5>
          </div>
          <p className="modelos__body__text">
            Modelo de negócio no qual a venda é diretamente do fabricante para o
            consumidor final, eliminando intermediários.
          </p>
        </div>
        <div className="modelos__card">
          <div className="modelos__header">
            <img src={B2BIcon} alt="" />
            <h5 className="modelos__header__text">
              Business to business (B2B)
            </h5>
          </div>
          <p className="modelos__body__text">
            Modelo de negócio no qual a venda é de uma empresa para outra
            empresa.
          </p>
        </div>
        <div className="modelos__card">
          <div className="modelos__header">
            <img src={omnichannelIcon} alt="" />
            <h5 className="modelos__header__text">Omnichannel</h5>
          </div>
          <p className="modelos__body__text">
            Modelo de negócio com uso simultâneo e integrado de diferentes
            canais de contato com o consumidor (online e offline).
          </p>
        </div>
        <div className="modelos__card">
          <div className="modelos__header">
            <img src={inOutIcon} alt="" />
            <h5 className="modelos__header__text">Marketplace IN/OUT</h5>
          </div>
          <p className="modelos__body__text">
            Modelo de negócio de vitrine online para compra e venda, onde a
            empresa pode ser seller (vendedor) ou ter seu próprio marketplace.
          </p>
        </div>
      </div>

      <div className="servicos">
        <h4 className="servicos__title">Serviços</h4>
        <div className="servicos__card">
          <img src={implantacaoPhoto} alt="" className="card__image" />
          <div className="servicos__text">
            <h5 className="card__title">Implantação</h5>
            <p className="card__paragraph">
              Implantação e Estruturação de um canal digital do zero.
            </p>
          </div>
        </div>
        <div className="servicos__card">
          <img src={reestruturacaoPhoto} alt="" className="card__image" />
          <div className="servicos__text servico2">
            <h5 className="card__title">Reestruturação</h5>
            <p className="card__paragraph">
              Reestruturação de um canal digital já existente.
            </p>
          </div>
        </div>
        <div className="servicos__card">
          <img src={aceleracaoPhoto} alt="" className="card__image" />
          <div className="servicos__text servico3">
            <h5 className="card__title">Aceleração</h5>
            <p className="card__paragraph">
              Aceleração e Evolução de vendas de um canal digital já existente.
            </p>
          </div>
        </div>
        <div className="servicos__card">
          <img src={cursosInCompanyPhoto} alt="" className="card__image" />
          <div className="servicos__text servico4">
            <h5 className="card__title">Cursos in company</h5>
            <p className="card__paragraph">
              Treinamento para colaboradores e gestores da empresa.
            </p>
          </div>
        </div>
        <div className="servicos__card">
          <img src={diagnosticoPhoto} alt="" className="card__image" />
          <div className="servicos__text servico5">
            <h5 className="card__title">Diagnóstico</h5>
            <p className="card__paragraph">
              Análise e Diagnóstico de uma operação digital
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessaoOQueFazemos;
