import "./sass/Whatsapp.css";
import whatsappImg from "../../../src/assets/imagens/icons/whatsapp.svg";
import { Link } from "react-router-dom";

const WhatsApp = () => {
  return (
    <Link to={"https://wa.me/5554981110081"} target="_blank">
      <img className="whatsapp" src={whatsappImg} />
    </Link>
  );
};

export default WhatsApp;
