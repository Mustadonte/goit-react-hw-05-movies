import { getTrandingMovies } from 'Helpers/ApiService';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Home = () => {
  const [trandingMovies, settrandingMovies] = useState([]);

  useEffect(() => {
    getTrandingMovies().then(settrandingMovies);
  }, []);
  const location = useLocation();
  return (
    <main>
      {trandingMovies.length > 0 && (
        <ul>
          {trandingMovies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
};
