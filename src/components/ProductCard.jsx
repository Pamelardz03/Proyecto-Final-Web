import { Link } from "react-router-dom";
import "../assets/styleHechoenNL.css";
import "../assets/emprendedores.css";

export default function ProductCard({ id, name, description, category, image, categoryLink }) {
  return (
    <Link to={`/emprendedor/${id}`} className="enlace-item">
      <div className="container-item">
        <div className="cuadroprecio nohover"></div>

        <div className="textocuadro">
          <h3>{name}</h3>
          <p>{description}</p>
          {category && (
            <Link to={categoryLink} className="categoria">
              {category}
            </Link>
          )}
        </div>

        <div className="imagencuadro">
          <img src={image} alt={name} />
        </div>
      </div>
    </Link>
  );
}
