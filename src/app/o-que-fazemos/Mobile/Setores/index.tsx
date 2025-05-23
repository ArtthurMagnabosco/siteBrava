import SetoresImg from "../../../../../public/assets/imagens/fotos/setores.svg";
import "./sass/Setores.scss";
import Image from "next/image";

const Setores = () => {
  return (
    <div className="setores__container">
      <p className="container__text1">
        Aplicamos nossa metodologia em todos os setores promovendo o
        aculturamento digital e garantindo sinergia entre as áreas da empresa.
      </p>
      <Image src={SetoresImg} alt="" />
    </div>
  );
};
export default Setores;
