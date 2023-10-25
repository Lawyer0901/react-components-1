import styled from '@emotion/styled';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    background-color: ${getRandomHexColor()};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100px;
    height: 100px;
    transition: transform 1s ease-out;
    :hover {
      transform: scale(1.1);
    }
  }

  li:nth-of-type(-n + 3) {
    border: 2px solid orange;
    margin-bottom: 1px;
    background-color: ${getRandomHexColor()};
  }

  li:nth-of-type(even) {
    border: 2px solid orange;
    background-color: ${getRandomHexColor()};
  }
`;
