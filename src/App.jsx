import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaginaBase from './pages/PaginaBase'
import PaginaInicial from './pages/PaginaInicial'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase/>}>
          <Route index element={<PaginaInicial/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
