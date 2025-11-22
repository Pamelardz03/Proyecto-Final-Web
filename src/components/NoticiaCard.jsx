import React from "react";

const NoticiaCard = ({ title, description, date, image }) => {
  return (
    <li className="container-item container-noticia nohover">
      <div className="textocuadro">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="fechacuadro">{date}</div>
      </div>
      <div className="imagencuadro">
        <img src={image} alt="Foto" />
      </div>
    </li>
  );
};

export default NoticiaCard;

