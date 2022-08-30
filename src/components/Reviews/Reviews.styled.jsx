import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
  width: 100%;
  list-style: none;
`;

export const ReviewsListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 2fr;
  justify-content: center;
  align-items: center;

  border-bottom: 1px black solid;
  span {
    grid-column: 1/3;
  }
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
  }
`;
