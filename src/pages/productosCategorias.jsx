import { Link } from "react-router-dom";
import "../assets/styleHechoenNL.css";
import "../assets/emprendedores.css";   // ← ESTE ES EL QUE FALTABA
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";


import LogoNL from "../images/LogoNL.svg";
import palomiras1 from "../images/laspalomiras1.png";
import spread2 from "../images/spread2.png";
import cacahuate from "../images/cacahuate.webp"
import avellana from "../images/avellana.webp"
import chocolate from "../images/chocolate.jpg"
import combinadas from "../images/combinadas.jpg"
import palochile from "../images/palomitaschile.jpg"
import mantequilla from "../images/mantequilla.jpg"


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
            image: avellana,
        },
        {
            id: 4,
            name: "Spread Cacahuate",
            description: "Perfecta para pan tostado o snacks.",
            category: "Comidas",
            categoryLink: "/categoria/comida",
            image: cacahuate,
        },
        {
            id: 5,
            name: "Palomiras Chocolate",
            description: "Crujientes palomitas bañadas en chocolate artesanal.",
            category: "Comidas",
            categoryLink: "/categoria/comida",
            image: chocolate,
        },
        {
            id: 6,
            name: "Palomiras Enchiladas",
            description: "Sabor picante y único para amantes del chile.",
            category: "Comidas",
            categoryLink: "/categoria/comida",
            image: palochile,
        },
        {
            id: 7,
            name: "Palomiras Mantequilla",
            description: "Clásicas palomitas con mantequilla premium.",
            category: "Comidas",
            categoryLink: "/categoria/comida",
            image: mantequilla,
        },
        {
            id: 8,
            name: "Palomiras Dulce-Salado",
            description: "La combinación perfecta entre dulce y salado.",
            category: "Comidas",
            categoryLink: "/categoria/comida",
            image: combinadas,
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
                        <Link to="/categorias" className="categoria">Categorias</Link>
                        <i className="ri-arrow-drop-left-line"></i>
                        <span className="categoria">Comida</span>
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