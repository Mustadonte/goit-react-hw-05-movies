import SearchBar from 'components/SerachBar/SearchBar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByKeyword } from 'Helpers/ApiService';
import RenderList from 'components/RenderList/RenderList';

const Movies = () => {
  const [state, setState] = useState({
    items: [],
  });
  const [searchParams, setSearchParams] = useSearchParams();

  const serarchQuery = searchParams.get('search');

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
      <RenderList list={items} />
    </>
  );
};

export default Movies;
