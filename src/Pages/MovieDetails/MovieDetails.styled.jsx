import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: right;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    padding: 4px;
    color: white;
    background-color: #4caf50;
    outline: none;
    border: none;
    border-radius: 4px;
  }
`;

export const ButtonLink = styled.button`
  background: #93baed;
  outline: none;
  border: none;
  border-radius: 4px;
  transition-duration: 0.4s;
  :hover {
    background-color: #4caf50;
    color: white;
    cursor: pointer;
  }
`;
export const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  padding: 10px 50px;
`;
export const MovieInfo = styled.div`
  display: flex;
  justify-content: center;

  img {
    display: block;
    height: 400px;
    border-radius: 4px;
  }
`;

export const MovieInfoText = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  p {
    display: inline-block;
  }
`;

export const AdditionalInformation = styled.div`
  text-align: center;

  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
  }
`;
