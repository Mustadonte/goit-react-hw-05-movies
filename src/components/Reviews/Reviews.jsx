import { getMovieReviews } from 'Helpers/ApiService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_IMG_URL } from 'Helpers/ApiService';
import { ReviewsList, ReviewsListItem } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(Number(movieId)).then(resp => setReviews(resp.results));
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(
            ({
              author_details: { avatar_path, name, rating, username },
              content,
            }) => {
              return (
                <ReviewsListItem key={username}>
                  <img
                    src={`${BASE_IMG_URL}${avatar_path}`}
                    alt={name}
                    width="150"
                  />
                  <div>
                    <h4>{name ? name : 'Unknown author'}</h4>
                    <p>
                      <b>Rating:</b> {rating}
                    </p>
                  </div>
                  <span>{content}</span>
                  <hr />
                </ReviewsListItem>
              );
            }
          )}
        </ReviewsList>
      ) : (
        <p>There is no reviews</p>
      )}
    </>
  );
};

export default Reviews;
