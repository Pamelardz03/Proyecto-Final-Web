import { Link } from "react-router-dom";
import "../assets/styleHechoenNL.css";
import "../assets/emprendedores.css";   // ← ESTE ES EL QUE FALTABA
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";


import LogoNL from "../images/LogoNL.svg";
import palomiras2 from "../images/laspalomiras2.png";
import palomiras1 from "../images/laspalomiras1.png";
import spread2 from "../images/spread2.png";
import spread3 from "../images/spread3.png";
import laspalomiras from "../images/laspalomiras.jpg";
import spread1 from "../images/spread1.png";
import noticia1 from "../images/noticia1.png";
import noticia2 from "../images/noticia2.png";

export default function PaginaProductosCategoria(){

    const productos = [
        {
            id: 1,
            name: "Palomiras Mix",
            description: "Deliciosas palomitas artesanales con mezcla dulce",
            category: "Comidas",
            categoryLink: "/categoria/comida",
            image: palomiras1,
        },
        {
            id: 2,
            name: "Palomiras Caramelo",
            description: "Receta especial con caramelo casero.",
            category: "Comidas",
            categoryLink: "/categoria/comida",
            image: spread2,
        },
        {
            id: 3,
            name: "Spread Avellana",
            description: "Crema untable artesanal con avellanas naturales.",
            category: "Comidas",
            categoryLink: "/categoria/comida",
            image: noticia1,
        },
        {
            id: 4,
            name: "Spread Cacahuate",
            description: "Perfecta para pan tostado o snacks.",
            category: "Comidas",
            categoryLink: "/categoria/comida",
            image: noticia2,
        },
        {
            id: 5,
            name: "Palomiras Chocolate",
            description: "Crujientes palomitas bañadas en chocolate artesanal.",
            category: "Comidas",
            categoryLink: "/categoria/comida",
            image: palomiras1,
        },
        {
            id: 6,
            name: "Palomiras Enchiladas",
            description: "Sabor picante y único para amantes del chile.",
            category: "Comidas",
            categoryLink: "/categoria/comida",
            image: palomiras1,
        },
        {
            id: 7,
            name: "Palomiras Mantequilla",
            description: "Clásicas palomitas con mantequilla premium.",
            category: "Comidas",
            categoryLink: "/categoria/comida",
            image: palomiras1,
        },
        {
            id: 8,
            name: "Palomiras Dulce-Salado",
            description: "La combinación perfecta entre dulce y salado.",
            category: "Comidas",
            categoryLink: "/categoria/comida",
            image: palomiras1,
        },

    ];

    return (
        <> 
            <div className="grid-container">
                <NavBar />

                <main>

                    <nav id="bread-crumbs">
                        <Link to="/" className="categoria">Inicio</Link>
                        <i className="ri-arrow-drop-left-line"></i>
                        <span className="categoria">Categorias</span>
                        <i className="ri-arrow-drop-left-line"></i>
                        <span className="categoria">Comidas</span>
                        <i className="ri-filter-2-fill"></i>
                    </nav>

                    <ul className="Emprendedores-container productos-grid">
                    {productos.map((prod) => (
                        <li key={prod.id} className="producto-list-item">
                        <ProductCard {...prod} />
                        </li>
                    ))}
                    </ul>
                </main>

            </div>
        </>
    );
}