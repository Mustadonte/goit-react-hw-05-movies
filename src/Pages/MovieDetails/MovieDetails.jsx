import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { getMovieById } from 'Helpers/ApiService';
import { useState, useEffect } from 'react';
import { BASE_IMG_URL } from 'Helpers/ApiService';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovieById(Number(movieId)).then(setMovie);
  }, [movieId]);

  const location = useLocation();
  console.log(location);
  const { title, overview, poster_path } = movie;

  return (
    <>
      <Link to={location.state?.from ?? '/movies'}>Go Back</Link>
      <div>
        <img src={`${BASE_IMG_URL}${poster_path}`} alt={title} height="400" />
        <h2>{title}</h2>
        <p>{overview}</p>

        <Link to="cast" state={{ from: location.state.from }}>
          Cast
        </Link>
        <br></br>
        <Link to="reviews" state={{ from: location.state.from }}>
          Reviews
        </Link>
      </div>
      <Outlet />
    </>
  );
};
