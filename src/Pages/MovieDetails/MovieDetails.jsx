import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from 'Helpers/ApiService';
import { useState, useEffect } from 'react';
import { BASE_IMG_URL } from 'Helpers/ApiService';
import {
  MovieInfo,
  MovieInfoText,
  AdditionalInformation,
  MovieInfoContainer,
  StyledLink,
  ButtonLink,
  StyledNavLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovieById(Number(movieId)).then(setMovie);
  }, [movieId]);

  const location = useLocation();

  const {
    title,
    overview,
    poster_path,
    genres = [],
    release_date,
    vote_average,
  } = movie;

  const date = new Date();
  return (
    <>
      <MovieInfoContainer>
        <StyledLink to={location.state?.from ?? '/movies'}>
          <ButtonLink type="buttom"> Go Back </ButtonLink>
        </StyledLink>

        <MovieInfo>
          <img src={`${BASE_IMG_URL}${poster_path}`} alt={title} />
          <MovieInfoText>
            <h2>
              {title} ({date.getUTCFullYear(release_date)})
            </h2>
            <b>User score:</b> {vote_average}
            <p>
              <h4>Overview:</h4> {overview}
            </p>
            <p>
              <h4>Genres:</h4> {genres.map(genre => genre.name).join(' | ')}
            </p>
          </MovieInfoText>
        </MovieInfo>

        <AdditionalInformation>
          <h3>Additional information:</h3>
          <ul>
            <li>
              <StyledNavLink to="cast" state={{ from: location.state.from }}>
                <ButtonLink>Cast</ButtonLink>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="reviews" state={{ from: location.state.from }}>
                <ButtonLink>Reviews</ButtonLink>
              </StyledNavLink>
            </li>
          </ul>
        </AdditionalInformation>

        <Outlet />
      </MovieInfoContainer>
    </>
  );
};

export default MovieDetails;
