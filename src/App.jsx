import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaginaInicial from './pages/PaginaInicial'
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Contato from './pages/Contato'
import NossosClientes from './pages/NossosClientes'
import WhatsApp from './components/Whatsapp'
import OqueFazemos from './pages/OQueFazemos'
import QuemSomos from './pages/QuemSomos'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaInicial/>}/>
        <Route path="/contato" element={<Contato />}/>
        <Route path="/nossos-clientes" element={<NossosClientes />}/>
        <Route path="/oque-fazemos" element={<OqueFazemos/>}/>
        <Route path="/quem-somos" element={<QuemSomos/>}/>  
      </Routes>
      <WhatsApp />
      <Footer />
    </BrowserRouter>
  )
}

export default App
