import { getMovieReviews } from 'Helpers/ApiService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_IMG_URL } from 'Helpers/ApiService';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(Number(movieId)).then(resp => setReviews(resp.results));
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(
            ({
              author_details: { avatar_path, name, rating, username },
              content,
            }) => {
              return (
                <li key={username}>
                  <img
                    src={`${BASE_IMG_URL}${avatar_path}`}
                    alt={name}
                    width="150"
                  />
                  <p>Name: {name}</p>
                  <p>Rating: {rating}</p>
                  <p>{content}</p>
                  <hr />
                </li>
              );
            }
          )}
        </ul>
      ) : (
        <p>There is no reviews</p>
      )}
    </>
  );
};
