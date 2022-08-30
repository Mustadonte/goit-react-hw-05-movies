import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MoviesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  grid-auto-rows: minmax(300px, auto);
  justify-content: center;
  align-content: center;
  padding: 0 20px;
  list-style: none;
`;

export const Main = styled.main`
  display: block;
  margin: 0 auto;
`;

export const MovieListItem = styled.li`
  :hover {
    box-shadow: rgba(0, 0, 0, 0.45) 0px 10px 25px;
  }
  border-radius: 4px;
`;

export const MovieCard = styled.div`
  img {
    width: 100%;
    display: inline-flex;
    align-items: center;
    margin: 0 auto;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  p {
    font-weight: 700;
    margin: 0;
    padding: 10px 0;
    color: black;
    text-align: center;
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
`;
