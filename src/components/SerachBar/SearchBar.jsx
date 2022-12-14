import { useState } from 'react';

import { SearchForm } from './SearchBar.styled';
import PropTypes from 'prop-types';
const SearchBar = ({ onSubmit }) => {
  const [state, setState] = useState({
    search: '',
  });

  const handleChange = e => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({
      search: '',
    });
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <input
        name="search"
        value={state.search}
        onChange={handleChange}
        type="search"
        placeholder="Search"
        required
      />
      <button type="submit">Search</button>
    </SearchForm>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchBar;
