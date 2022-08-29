import { useState } from 'react';
export const SearchBar = ({ onSubmit }) => {
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
    <form onSubmit={handleSubmit}>
      <input
        name="search"
        value={state.search}
        onChange={handleChange}
        type="search"
        placeholder="Search"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};
