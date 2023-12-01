import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaInicial from "./pages/PaginaInicial";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Contato from "./pages/Contato";
import NossosClientes from "./pages/NossosClientes";
import WhatsApp from "./components/Whatsapp";
import OQueFazemos from "./pages/OQueFazemos";
import QuemSomos from "./pages/QuemSomos";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      {menuOpen && <Menu closeMenu={closeMenu} />}
      <Header openMenu={openMenu} />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/entre-em-contato" element={<Contato />} />
        <Route path="/nossos-clientes" element={<NossosClientes />} />
        <Route path="/o-que-fazemos" element={<OQueFazemos />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
      </Routes>
      <WhatsApp />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
