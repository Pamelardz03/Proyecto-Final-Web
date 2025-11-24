import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import "../assets/styleHechoenNL.css";

// imagenes
import cat1 from "../images/categoria1.jpg";
import cat2 from "../images/categoria2.jpeg";
import cat3 from "../images/categoria3.jpg";
import cat4 from "../images/categoria4.jpeg";
import cat5 from "../images/categoria5.jpg";
import cat6 from "../images/categoria6.jpg";
import cat7 from "../images/categoria7.jpeg";

import palomiras from "../images/laspalomiras.jpg";
import spread from "../images/spread1.png";

export default function ListaCategorias() {
  const categorias = [
    { nombre: "Comida", imagen: cat1, link: "/categoria/comida" },
    { nombre: "Hogar", imagen: cat2, link: "#" },
    { nombre: "Ropa", imagen: cat3, link: "#" },
    { nombre: "Deportes", imagen: cat4, link: "#" },
    { nombre: "Artesanias", imagen: cat5, link: "#" },
    { nombre: "Libros", imagen: cat6, link: "#" },
    { nombre: "Mascotas", imagen: cat7, link: "#" }
  ];

  const emprendedores = [
    {
      id: 1,
      nombre: "Las Palomiras",
      descripcion:
        "Las palomiras nacen del amor por lo artesanal y el deseo de transformar un antojo en una experiencia única.",
      categoria: "Comida",
      imagen: palomiras,
      link: "/emprendedor/1"
    },
    {
      id: 2,
      nombre: "Spread MX",
      descripcion:
        "Spread mezcla el gusto y los aderezos para crear una explosión de sabores llenos de elegancia y felicidad.",
      categoria: "Comida",
      imagen: spread,
      link: "/emprendedor/2"
    }
  ];

  return (
    <>
      <Navbar />

      <main>
        <nav id="bread-crumbs">
          <Link to="/" className="categoria">Inicio</Link>
          <i className="ri-arrow-drop-left-line"></i>
          <span className="categoria">Categorias</span>
          <i className="ri-filter-2-fill"></i>
        </nav>

        <h3 className="header-negro h3-desktop">Categorias:</h3>
        <div className="linea-naranja"></div>

        <div className="carrusel-categorias">
          {categorias.map((cat, index) => (
            <Link key={index} to={cat.link}>
              <div className="carrusel-item-categorias">
                <img src={cat.imagen} alt={cat.nombre} />
                <div className="carrusel-item-text">{cat.nombre}</div>
              </div>
            </Link>
          ))}
        </div>

        <h3 className="header-negro h3-desktop">Conoce a nuestros Emprendedores:</h3>
        <div className="linea-naranja"></div>

        <ul className="Emprendedores-container">
          {emprendedores.map((emp) => (
            <Link key={emp.id} to={emp.link} className="enlace-item">
              <li className="container-item">
                <div className="cuadroprecio nohover"></div>

                <div className="textocuadro">
                  <h3>{emp.nombre}</h3>
                  <p>{emp.descripcion}</p>
                  <Link to="/categoria/comida" className="categoria">
                    {emp.categoria}
                  </Link>
                </div>

                <div className="imagencuadro">
                  <img src={emp.imagen} alt={emp.nombre} />
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </main>

      <footer className="footer">
        <small>Programa Gobierno de Nuevo León</small>
      </footer>
    </>
  );
}
