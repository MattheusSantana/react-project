import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  const API_IMAGE = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="card">
      <div className="poster">
        <img src={API_IMAGE + props.poster_path} alt="" />
      </div>
      <div className="info">
        <p className="titulo">{props.title}</p>
        <p className="rating">{props.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieCard;
