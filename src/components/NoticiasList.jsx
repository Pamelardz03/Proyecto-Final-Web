import React from "react";
import NoticiaCard from "./NoticiaCard";
import noticia1 from "../images/noticia1.png";
import noticia2 from "../images/noticia2.png";

function NoticiasList() {
    const noticias = [
        {
            id: 1,
            title: 'Cierra con éxito Mercado Hecho en Nuevo León “Mujeres que Inspiran”',
            description: 'El Gobernador de Nuevo León, Samuel Alejandro García Sepúlveda y Mariana Rodríguez Cantú acudieron a recorrer los stands.',
            date: '26/10/2025',
            image: noticia1
        },
        {
            id: 2,
            title: 'Inauguran Mariana y Samuel Mercado Hecho en Nuevo León "Mujeres que Inspiran"',
            description: 'Con el fin de apoyar a las mujeres emprendedoras de Nuevo León, se reunieron más de 120 empresarias locales.',
            date: '25/10/2025',
            image: noticia2
        }
    ];

    return (
        <ul className="Emprendedores-container">
            {noticias.map((noticia) => (
                <NoticiaCard
                    key={noticia.id}
                    title={noticia.title}
                    description={noticia.description}
                    date={noticia.date}
                    image={noticia.image}
                />
            ))}
        </ul>
    );
}

export default NoticiasList;
