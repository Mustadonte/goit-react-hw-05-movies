import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Layout } from './Layout/Layout';
// import { Home } from 'Pages/Home/Home';
// import { MovieDetails } from 'Pages/MovieDetails/MovieDetails';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';
// import { Movies } from 'Pages/Movies/Movies';

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('../Pages/Home/Home'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));
export const App = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
