import { getTrandingMovies, getTrandingMoviesMore } from 'Helpers/ApiService';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import RenderList from 'components/RenderList/RenderList';
import { Main } from 'components/RenderList/RenderList.styled';

const Home = () => {
  const [trandingMovies, settrandingMovies] = useState([]);
  const [page, setPage] = useState(2);

  useEffect(() => {
    getTrandingMovies().then(settrandingMovies);
  }, []);

  const fetchMoreData = () => {
    getTrandingMoviesMore(page).then(resp => {
      settrandingMovies([...trandingMovies, ...resp]);
    });
    setPage(page + 1);
    console.log(page);
  };
  return (
    <Main>
      {trandingMovies.length > 0 && (
        <>
          <InfiniteScroll
            dataLength={trandingMovies.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            <RenderList list={trandingMovies} />
          </InfiniteScroll>
        </>
      )}
    </Main>
  );
};

export default Home;
