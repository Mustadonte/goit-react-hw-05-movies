import {
  MoviesList,
  MovieListItem,
  MovieCard,
  MovieLink,
} from './RenderList.styled.jsx';
import { BASE_IMG_URL } from 'Helpers/ApiService';
import { useLocation } from 'react-router-dom';

const RenderList = ({ list }) => {
  const date = new Date();
  const location = useLocation();
  return (
    <MoviesList>
      {list.map(({ id, title, poster_path, release_date }) => {
        return (
          <MovieListItem key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              <MovieCard>
                <img
                  src={`${BASE_IMG_URL}${poster_path}`}
                  alt={`poster ${title}`}
                />
                <p>
                  {title} ({date.getFullYear(release_date)})
                </p>
              </MovieCard>
            </MovieLink>
          </MovieListItem>
        );
      })}
    </MoviesList>
  );
};

export default RenderList;
