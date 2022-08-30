import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AppBarStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  outline: 1px solid red;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: rgb(41, 184, 233);
  background: linear-gradient(
    48deg,
    rgba(41, 184, 233, 1) 0%,
    rgba(16, 77, 125, 1) 100%
  );
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  font-size: 18px;
  color: white;

  &.active {
    background: #ff0000;
    background: linear-gradient(to left, #ff0000 0%, #ffff00 50%, #ff0000 100%);
    -webkit-text-fill-color: transparent;
  }
`;
