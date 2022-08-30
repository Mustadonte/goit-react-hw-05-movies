import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;

  list-style: none;
`;

export const CastItem = styled.li`
  font-size: 16px;
  font-style: italic;
  padding: 20px;

  p {
    margin: 0;
  }
`;
