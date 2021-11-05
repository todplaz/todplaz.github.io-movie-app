import { Close, Visibility, VisibilityOff } from '@material-ui/icons';
import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const MovieControls = ({movie, type}) => {

  const { removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatched } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <Visibility />
          </button>
          <button 
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <Close />
          </button>
        </>
      )}

      {type === "watched" &&
      (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <VisibilityOff />
          </button>
          <button className="ctrl-btn" onClick={() => removeFromWatched(movie.id)}>
            <Close />
          </button>
        </>
      )
      }
    </div>
  );
};

export default MovieControls;