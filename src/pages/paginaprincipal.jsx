import { Link } from "react-router-dom";
import "../assets/styleHechoenNL.css";
import "../assets/emprendedores.css";
import NavBar from "../components/NavBar";
import Carrusel from "../components/Carrusel";
import EmprendedoresList from "../components/EmprendedorList";
import NoticiasList from "../components/NoticiasList";


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

                <NoticiasList />
            </main>

            <footer className="footer">
                <small>Programa Gobierno de Nuevo León</small>
            </footer>

        </div>
    );
}

