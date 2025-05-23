'use client';

import Link from "next/link";
import "./sass/Clientes.css";
import { logoClientesColorido } from "../../Desk/Clientes/clientes_cinza";
import Image from "next/image";

const Clientes = () => {
  return (
    <div className="home__clientes">
      <div className="clientes__titles">
        <p className="clientes__title2">Nossos clientes</p>
        <h2 className="clientes__title1">
          Quem <span className="text-highlight">confia </span>
          em nosso trabalho e <span className="text-highlight">atesta </span>
          nossa qualidade
        </h2>
      </div>
      <div className="clientes__brands">
        <div className="nossos-clientes__body">
          {logoClientesColorido.map((cliente) => (
            <div className="logo__clientes" key={cliente.id}>
              <Image src={cliente.src} alt=''></Image>
            </div>
          ))}
        </div>
      </div>

      <Link href="/nossos-clientes" className="clientes__mainbutton">
        Saiba Mais
      </Link>
    </div>
  );
};

export default Clientes;
