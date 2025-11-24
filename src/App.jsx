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
