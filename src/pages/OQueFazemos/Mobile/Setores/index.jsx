import SetoresImg from "../../../../assets/imagens/fotos/setores.svg";
import "./sass/Setores.scss";
const Setores = () => {
  return (
    <div className="setores__container">
      <p className="container__text1">
        Aplicamos nossa metodologia em todos os setores promovendo o
        aculturamento digital e garantindo sinergia entre as áreas da empresa.
      </p>
      <img src={SetoresImg} alt="" />
    </div>
  );
};
export default Setores;
