import { Link } from "react-router-dom";
import "../assets/styleHechoenNL.css";
import "../assets/emprendedores.css";
import NavBar from "../components/NavBar";
import Carrusel from "../components/Carrusel";
import EmprendedoresList from "../components/EmprendedorList";


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

                <Carrusel/>

                <h3 className="header-negro h3-desktop">Conoce a nuestros Emprendedores:</h3>
                <div className="linea-naranja"></div>

                <EmprendedoresList />

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

