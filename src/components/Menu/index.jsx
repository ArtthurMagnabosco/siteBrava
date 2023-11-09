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
                <img src={LogoBravaBranco} alt="Logo Brava" onClick={() => closeMenu()}/>
            </Link>
                <img src={IconX} alt="Fechar menu" onClick={() => closeMenu()} />
            </div>
            <div className='menu__body'>
                <Link onClick={() => closeMenu()} className='menu__body__link' to="/quem-somos">Quem Somos</Link>
                <Link onClick={() => closeMenu()} className='menu__body__link' to="/o-que-fazemos">O que fazemos</Link>
                <Link onClick={() => closeMenu()} className='menu__body__link' to="/nossos-clientes">Nossos clientes</Link>
                <Link onClick={() => closeMenu()} className='menu__body__link' to="/contato">Entre em contato</Link>
            </div>
            <div className='menu__footer'>
                <p className='menu__subtitle'>ENDEREÇO</p>
                <p className='menu__address'>R. Olavo Bilac, 503 - sala 4 - Rio Branco, Caxias do Sul - RS, 95010-080</p>
                <p className='menu__subtitle'>REDES SOCIAIS</p>
                <div className='menu__redes-sociais'>
                    <a href="">Instagram <img src="" alt="" /></a>
                    <a href="">Linkedin <img src="" alt="" /></a>
                    <a href="">facebook <img src="" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Menu