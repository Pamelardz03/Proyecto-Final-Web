import { Routes, Route } from "react-router-dom";

// paginas
import PaginaPrincipal from "./pages/paginaprincipal";
import ListaCategorias from "./pages/listacategorias";

function App() {
  return (
    <Routes>
      {/* Pagina principal */}
      <Route path="/" element={<PaginaPrincipal />} />

      {/* Pagina de lista de categorias */}
      <Route path="/categorias" element={<ListaCategorias />} />

    </Routes>
  );
}

export default App;
