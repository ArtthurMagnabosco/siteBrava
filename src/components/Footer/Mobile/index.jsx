import { Link } from "react-router-dom"

const FooterMobile = () => {
    return (
        <div className="footer">
            <div className="footer1">
                <div className="footer__section">
                    <h4 className="footer__title">
                        Explore
                    </h4>
                    <Link className="footer__link" to="/quem-somos">Quem somos</Link>
                    <Link className="footer__link" to="/o-que-fazemos">O que fazemos</Link>
                    <Link className="footer__link" to="/nossos-clientes">Nossos clientes</Link>
                    <Link className="footer__link" to="/contato">Entre em contato</Link>
                </div>
                <div className="footer__section">
                    <h4 className="footer__title">
                        Telefone
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default FooterMobile