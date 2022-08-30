import { useState, useEffect } from 'react';
import { getMovieCast } from 'Helpers/ApiService';
import { useParams } from 'react-router-dom';
import { CastItem, CastList } from './Cast.styled';

const Cast = () => {
  const id = useParams().movieId;
  const [cast, setCast] = useState('');

  useEffect(() => {
    getMovieCast(id).then(setCast);
  }, [id]);
  return (
    <>
      {cast.length > 0 && (
        <CastList>
          {cast.map(({ name, id, profile_path }) => {
            return (
              <CastItem key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  height="150"
                />
                <p>{name}</p>
              </CastItem>
            );
          })}
        </CastList>
      )}
    </>
  );
};

export default Cast;
