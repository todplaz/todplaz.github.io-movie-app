import React, { useContext } from 'react';
import MovieCard from "./MovieCard";
import { GlobalContext } from '../context/GlobalState';

const Watched = () => {

  const { watched } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Film(s) déjà vu(s)</h1>

          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Film" : "Films"}
          </span>

        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} type="watched"/>
            ))}
          </div>
        ) : (
          <h2 className="no-movies"> Pas de films à afficher, visionnez les depuis votre playlist ! </h2>
        )}
      </div>
    </div>
  );
};

export default Watched;