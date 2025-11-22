import { Link } from "react-router-dom";
import "../assets/styleHechoenNL.css";
import "../assets/emprendedores.css";
import NavBar from "../components/NavBar";


import LogoNL from "../images/LogoNL.svg";
import palomiras2 from "../images/laspalomiras2.png";
import palomiras1 from "../images/laspalomiras1.png";
import spread2 from "../images/spread2.png";
import spread3 from "../images/spread3.png";
import laspalomiras from "../images/laspalomiras.jpg";
import spread1 from "../images/spread1.png";
import noticia1 from "../images/noticia1.png";
import noticia2 from "../images/noticia2.png";


export default function PaginaPrincipal() {
    return (
        <div className="grid-container">
            <NavBar />

            <main>
                <section id="banner">
                    <div id="info-container">
                        <div style={{ marginTop: "10px" }}>
                            <h2 style={{ marginLeft: "20px", paddingLeft: 0 }}>
                                Macha Sauce La Floreña
                            </h2>
                            <p className="info">
                                Salsa macha artesanal con el sello Hecho en Nuevo León. Sabor picante y 100% regio.
                            </p>
                        </div>
                    </div>
                </section>

                <h3 className="header-negro h3-desktop">Conoce los Más Vendidos:</h3>
                <div className="linea-naranja"></div>

                <div className="carrusel-contenedor">
                    <i className="ri-arrow-left-line"></i>

                    <div className="carrusel">
                        <Link to="/producto" className="enlace-item">
                            <div className="carrusel-item-contendor">
                                <img src={palomiras2} className="carrusel-item" />
                                <div className="carrusel-item-text">Palomiras Queso</div>
                            </div>
                        </Link>

                        <Link to="/producto" className="enlace-item">
                            <div className="carrusel-item-contendor">
                                <img src={palomiras1} className="carrusel-item" />
                                <div className="carrusel-item-text">Palomiras Mix</div>
                            </div>
                        </Link>

                        <Link to="/spread" className="enlace-item">
                            <div className="carrusel-item-contendor">
                                <img src={spread2} className="carrusel-item" />
                                <div className="carrusel-item-text">Spread Original</div>
                            </div>
                        </Link>

                        <Link to="/spread" className="enlace-item">
                            <div className="carrusel-item-contendor">
                                <img src={spread3} className="carrusel-item" />
                                <div className="carrusel-item-text">Spread Piquín y Limón</div>
                            </div>
                        </Link>
                    </div>

                    <i className="ri-arrow-right-line"></i>
                </div>

                <h3 className="header-negro h3-desktop">Conoce a nuestros Emprendedores:</h3>
                <div className="linea-naranja"></div>

                <ul className="Emprendedores-container">
                    <Link to="/emprendedor/1" className="enlace-item">
                        <li className="container-item">
                            <div className="cuadroprecio nohover"></div>
                            <div className="textocuadro">
                                <h3>Las Palomiras</h3>
                                <p>
                                    Las palomiras nacen del amor por lo artesanal y el deseo de transformar un antojo en una experiencia única.
                                </p>
                                <Link to="/productos" className="categoria">Comida</Link>
                            </div>
                            <div className="imagencuadro">
                                <img src={laspalomiras} alt="Foto" />
                            </div>
                        </li>
                    </Link>

                    <Link to="/emprendedor/2" className="enlace-item">
                        <li className="container-item">
                            <div className="cuadroprecio nohover"></div>
                            <div className="textocuadro">
                                <h3>Spread MX</h3>
                                <p>
                                    Spread mezcla el gusto y los aderezos para crear una explosión de sabores elegantes.
                                </p>
                                <Link to="/productos" className="categoria">Comida</Link>
                            </div>
                            <div className="imagencuadro">
                                <img src={spread1} alt="Foto" />
                            </div>
                        </li>
                    </Link>
                </ul>

                <h3 className="header-negro h3-desktop">Noticias:</h3>
                <div className="linea-naranja"></div>

                <ul className="Emprendedores-container">
                    <li className="container-item container-noticia nohover">
                        <div className="textocuadro">
                            <h3>Cierra con éxito Mercado Hecho en Nuevo León “Mujeres que Inspiran”</h3>
                            <p>
                                El Gobernador de Nuevo León, Samuel Alejandro García Sepúlveda y Mariana Rodríguez Cantú acudieron a recorrer los stands.
                            </p>
                            <div className="fechacuadro">26/10/2025</div>
                        </div>
                        <div className="imagencuadro">
                            <img src={noticia1} alt="Foto" />
                        </div>
                    </li>

                    <li className="container-item container-noticia nohover">
                        <div className="textocuadro">
                            <h3>Inauguran Mariana y Samuel Mercado Hecho en Nuevo León "Mujeres que Inspiran"</h3>
                            <p>
                                Con el fin de apoyar a las mujeres emprendedoras de Nuevo León, se reunieron más de 120 empresarias locales.
                            </p>
                            <div className="fechacuadro">25/10/2025</div>
                        </div>
                        <div className="imagencuadro">
                            <img src={noticia2} alt="Foto" />
                        </div>
                    </li>
                </ul>
            </main>

            <footer className="footer">
                <small>Programa Gobierno de Nuevo León</small>
            </footer>

        </div>
    );
}

