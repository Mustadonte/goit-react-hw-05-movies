import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '799d796b985f1f6ed2e5b2e723499181';
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const getTrandingMovies = async () => {
  try {
    const response = await axios('/trending/movie/day', {
      params: {
        api_key: API_KEY,
      },
    });

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieById = async id => {
  try {
    const resp = await axios(`movie/${id}?api_key=${API_KEY}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieCast = async id => {
  try {
    const resp = await axios(`movie/${id}/credits?api_key=${API_KEY}`);
    return resp.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieReviews = async id => {
  try {
    const resp = await axios(`movie/${id}/reviews?api_key=${API_KEY}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieByKeyword = async q => {
  try {
    const resp = await axios('/search/movie', {
      params: {
        api_key: API_KEY,
        query: q,
      },
    });
    return resp.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getTrandingMoviesMore = async page => {
  try {
    const response = await axios('/trending/movie/day', {
      params: {
        api_key: API_KEY,
        page,
      },
    });

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
