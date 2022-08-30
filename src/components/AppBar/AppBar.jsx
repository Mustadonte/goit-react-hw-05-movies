import { Link } from './AppBar.styled';
import { AppBarStyled } from './AppBar.styled';
const AppBar = () => {
  return (
    <AppBarStyled>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </AppBarStyled>
  );
};

export default AppBar;
