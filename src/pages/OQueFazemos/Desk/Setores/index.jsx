import SetoresImg from '../../../../assets/imagens/fotos/setores.svg'
import './sass/SetoresDesk.scss'
const SetoresDesk = () => {
    return (
        <div className='setores__containerDesk'>
            <p className="container__text1">Aplicamos nossa metodologia em todos os setores promovendo o aculturamento digital e garantindo sinergia entre as áreas da empresa.</p>
            <img src={SetoresImg} alt="" />

        </div>
    )
}
export default SetoresDesk