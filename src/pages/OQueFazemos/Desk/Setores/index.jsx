import SetoresImg from '../../../../assets/imagens/fotos/setoresDesk.svg'
import './sass/SetoresDesk.scss'
const SetoresDesk = () => {
    return (
        <div className='setores__container-desk'>
            <p className="setores__container__text">Aplicamos nossa metodologia em todos os setores promovendo o aculturamento digital e garantindo sinergia entre as áreas da empresa.</p>
            <img src={SetoresImg} alt="" />
        </div>
    )
}
export default SetoresDesk