import { NavLink } from 'react-router-dom';
export const AppBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </div>
  );
};