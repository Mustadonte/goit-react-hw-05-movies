import { SearchBar } from 'components/SerachBar/SearchBar';
import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { getMovieByKeyword } from 'Helpers/ApiService';

export const Movies = () => {
  const [state, setState] = useState({
    items: [],
  });
  const [searchParams, setSearchParams] = useSearchParams();

  const serarchQuery = searchParams.get('search');
  const location = useLocation();

  useEffect(() => {
    if (!serarchQuery) {
      return;
    }
    getMovieByKeyword(serarchQuery).then(resp =>
      setState({
        items: [...resp],
      })
    );
  }, [serarchQuery]);

  const { items } = state;
  const changeSearch = ({ search }) => {
    setSearchParams({ search });
  };

  return (
    <>
      <SearchBar onSubmit={changeSearch} />
      <ul>
        {items.length > 0 &&
          items.map(({ id, title }) => {
            return (
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <li key={id}>{title}</li>
              </Link>
            );
          })}
      </ul>
    </>
  );
};
