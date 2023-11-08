import { Link } from "react-router-dom"
import "./Mobile/sass/PaginaInicial.css"

const PaginaInicial = () => {
    return (
        <>
            <h3><span className="text-highlight">Consultoria estratégica</span> para estruturar e acelerar sua operação de <span className="text-highlight">e-commerce e marketplace</span></h3>


            <Link to="/quem-somos">
                <button><p>Saiba Mais</p></button></Link>
        </>
    )
}

export default PaginaInicial