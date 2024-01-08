import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { CategoriasPage } from './pages/CategoriasPage';
import { CategoriasFormPage } from './pages/CategoriaFormPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/categorias"}/>} />
        <Route path="/categorias" element={<CategoriasPage/>} />
        <Route path="/categoria-create" element= {<CategoriasFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App