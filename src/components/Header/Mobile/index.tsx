'use client';

import Link from "next/link";
import LogoBravaVerde from "../../../../public/assets/imagens/logo/logoBravaVerde.svg";
import IconMenu from "../../../../public/assets/imagens/icons/icon-menu.svg";
import styles from "./sass/index.module.scss";
import Image from "next/image";
import React from "react";
import LogoBravaBranco from "../../../../public/assets/imagens/logo/logoBravaBranco.svg";
import IconX from "../../../../public/assets/imagens/icons/iconX.svg";
import IconFlecha from "../../../../public/assets/imagens/icons/icon-flecha.svg";

const HeaderMobile = () => {
    const [openMenu, setOpenMenu] = React.useState(false)
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link href="/" className={styles.headerLogo}>
                    <Image src={LogoBravaVerde} alt="Logo Brava" />
                </Link>
                <div className={styles.headerMenuButton} onClick={() => { setOpenMenu(!openMenu) }}>
                    <Image src={IconMenu} alt="iconMenu" />
                </div>
                {openMenu &&
                    <>
                      <div className={styles.menuContainer}>
                            <div className={styles.menuHeader}>
                                <Link href="/">
                                    <Image
                                        src={LogoBravaBranco}
                                        alt="Logo Brava"
                                        onClick={() => setOpenMenu(!openMenu)}
                                        className={styles.menuHeaderLogo}
                                    />
                                </Link>
                                <Image src={IconX} alt="Fechar menu" onClick={() => setOpenMenu(!openMenu)} className={styles.menuHeaderClosebtn} />
                            </div>
                            <ul className={styles.menuBodyNav}>
                                <li>
                                    <Link
                                        onClick={() => setOpenMenu(!openMenu)}
                                        className={styles.menuBodyLink}
                                        href="/quem-somos"
                                    >
                                        Quem Somos
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onClick={() => setOpenMenu(!openMenu)}
                                        className={styles.menuBodyLink}
                                        href="/o-que-fazemos"
                                    >
                                        O que fazemos
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onClick={() => setOpenMenu(!openMenu)}
                                        className={styles.menuBodyLink}
                                        href="/nossos-clientes"
                                    >
                                        Nossos clientes
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onClick={() => setOpenMenu(!openMenu)}
                                        className={styles.menuBodyLink}
                                        href="/entre-em-contato"
                                    >
                                        Entre em contato
                                    </Link>
                                </li>
                            </ul>
                            <div className={styles.menuFooter}>
                                <p className={styles.menuSubtitle}>ENDEREÇO</p>
                                <p className={styles.menuFooterText}>
                                    R. Olavo Bilac, 503 - sala 4 - Rio Branco, Caxias do Sul - RS,
                                    95010-080
                                </p>
                                <p className={styles.menuSubtitle}>REDES SOCIAIS</p>
                                <div className={styles.menuRedesSociais}>
                                    <a
                                        className={`${styles.menuFooterText} ${styles.redesSociais}`}
                                        href="https://www.instagram.com/brava.digital/"
                                        target="_blank"
                                    >
                                        Instagram <img src={IconFlecha} alt="" />
                                    </a>
                                    <a
                                        className={`${styles.menuFooterText} ${styles.redesSociais}`}
                                        href="https://www.linkedin.com/company/brava-consultoria-ecommerce/"
                                        target="_blank"
                                    >
                                        Linkedin <img src={IconFlecha} alt="" />
                                    </a>
                                    <a
                                        className={styles.menuFooterText}
                                        href="https://www.facebook.com/bravaconsultoria"
                                        target="_blank"
                                    >
                                        Facebook <img src={IconFlecha} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* 
                            <ul className={styles.menuBodyNav}>
                            <li>
                                <Link className={styles.menuLinkMobile} href="/quem-somos">
                                    Quem Somos
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.menuLinkMobile} href="/o-que-fazemos">
                                    O que fazemos
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.menuLinkMobile} href="/nossos-clientes">
                                    Nossos clientes
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.menuLinkMobile} href="/entre-em-contato">
                                    Entre em contato
                                </Link>
                            </li>
                        </ul> 
                   
                        */}
                
                      </>
                   

                }
            </div>
        </header>
    )
}

export default HeaderMobile