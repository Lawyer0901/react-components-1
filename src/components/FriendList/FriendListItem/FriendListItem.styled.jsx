import styled from '@emotion/styled';

export const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  background-color: ${props => (props.isOnline ? '#4fbf5e' : '#ab1010')};
`;

export const Item = styled.li`
  width: 300px;
  padding: 10px;
  display: flex;
  gap: 20px;
  align-items: center;
  outline: 1px dashed tomato;
  transition: transform 1s ease;
  :hover {
    transform: scale(1.1);
    background-color: tomato;
  }

  p {
    text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
    letter-spacing: 4px;
    word-spacing: 4px;
    font-size: 25px;
  }
`;
