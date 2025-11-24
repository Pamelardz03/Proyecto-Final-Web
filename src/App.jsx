<<<<<<< HEAD

import PaginaPrincipal from './pages/paginaprincipal';

function App() {
  return (
      <PaginaPrincipal />
  );
}

export default App
=======
import { Routes, Route } from "react-router-dom";

// paginas
import PaginaPrincipal from "./pages/paginaprincipal";
import ListaCategorias from "./pages/listacategorias";
import PaginaProductosCategoria from "./pages/productosCategorias";

function App() {
  return (
    <Routes>
      {/* Pagina principal */}
      <Route path="/" element={<PaginaPrincipal />} />

      {/* Pagina de lista de categorias */}
      <Route path="/categorias" element={<ListaCategorias />} />

      {/* Pagina de lista de categorias */}
      <Route path="/categoria/comida" element={<PaginaProductosCategoria />} />

    </Routes>
  );
}

export default App;
>>>>>>> e904c951a42788e4e76a3fbd64e6cb70d2dfeff4
