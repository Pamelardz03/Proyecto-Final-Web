import ProductCard from "./ProductCard";
import laspalomiras from "../images/laspalomiras.jpg";
import spread from "../images/spread1.png";

function EmprendedoresList() {
    const products = [
        {
            id: 1,
            name: "Las Palomiras",
            description: "Las palomiras nacen del amor por lo artesanal y el deseo de transformar un antojo en una experiencia única.",
            category: "Comida",
            categoryLink: "/categorias/comida",
            image: laspalomiras
        },
        {
            id: 2,
            name: "Spread",
            description:
                "Spread mezcla el gusto y los aderezos para crear una explocion de sabores llenos de elegancia y felicidad",
            category: "Comida",
            categoryLink: "/categorias/comida",
            image: spread,
        },
    ];

    return (
        <ul className="Emprendedores-container">
            {products.map((p) => (
                <ProductCard
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    description={p.description}
                    category={p.category}
                    categoryLink={p.categoryLink}
                    image={p.image}
                />
            ))}
        </ul>
    );
}

export default EmprendedoresList;
