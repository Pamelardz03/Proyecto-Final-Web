import { useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/emprendedores.css";
import palomiras2 from "../images/laspalomiras2.png";
import palomiras1 from "../images/laspalomiras1.png";
import spread2 from "../images/spread2.png";
import spread3 from "../images/spread3.png";

export default function Carrusel() {
  const carruselRef = useRef(null);

  const scrollLeft = () => {
    carruselRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    carruselRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const items = [
    { img: palomiras2, text: "Palomiras Queso", link: "/producto" },
    { img: palomiras1, text: "Palomiras Mix", link: "/producto" },
    { img: spread2, text: "Spread Original", link: "/spread" },
    { img: spread3, text: "Spread Piquín y Limón", link: "/spread" },
  ];

  return (
    <div className="carrusel-contenedor">
      <i className="ri-arrow-left-line" onClick={scrollLeft}></i>

      <div className="carrusel" ref={carruselRef}>
        {items.map((item, index) => (
          <Link to={item.link} className="enlace-item" key={index}>
            <div className="carrusel-item-contendor">
              <img src={item.img} className="carrusel-item" />
              <div className="carrusel-item-text">{item.text}</div>
            </div>
          </Link>
        ))}
      </div>

      <i className="ri-arrow-right-line" onClick={scrollRight}></i>
    </div>
  );
}
