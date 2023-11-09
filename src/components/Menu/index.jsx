import {slide as burguer} from 'react-burger-menu'
import { Link } from "react-router-dom";
import LogoBravaBranco from '../../assets/imagens/logo/logoBravaBranco.svg'
import IconX from '../../assets/imagens/icons/iconX.svg'
import './sass/Menu.scss'

const Menu = ({closeMenu}) => {
    return (
        <div className='menu__container'>
            <div className='menu__header'>
            <Link to="/">
                <img src={LogoBravaBranco} alt="Logo Brava" />
            </Link>
                <img src={IconX} alt="Fechar menu" onClick={() => closeMenu()} />
            </div>
            <div className='menu__body'>
                <Link className='menu__body__link' to="/quem-somos">Quem Somos</Link>
                <Link className='menu__body__link' to="/o-que-fazemos">O que fazemos</Link>
                <Link className='menu__body__link' to="/nossos-clientes">Nossos clientes</Link>
                <Link className='menu__body__link' to="/contato">Entre em contato</Link>
            </div>
        </div>
    )
}

export default Menu