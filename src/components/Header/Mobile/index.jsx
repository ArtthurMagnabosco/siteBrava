import { Link } from "react-router-dom";
import LogoBrava from "../../../assets/imagens/logo/logoBrava.svg";

const HeaderMobile = () => {

   return <>
    <header>
        <div className="header--container">
            <Link to="/">
                <img src={LogoBrava} alt="Logo Brava" />
            </Link>
        </div>
    </header>
   </>
    
}

export default HeaderMobile