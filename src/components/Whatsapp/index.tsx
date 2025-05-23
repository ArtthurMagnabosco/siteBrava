import "./sass/Whatsapp.css";
import whatsappImg from "../../../src/assets/imagens/icons/whatsapp.svg";
import Link from "next/link";
import Image from "next/image";

const WhatsApp = () => {
  return (
    <Link href={"https://wa.me/5554981110081"} target="_blank">
      <Image className="whatsapp" src={whatsappImg} alt=""/>
    </Link>
  );
};

export default WhatsApp;
