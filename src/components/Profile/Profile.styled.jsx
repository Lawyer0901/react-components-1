import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  img {
    display: block;
    margin: auto;
    width: 200px;
    margin-top: 15px;
  }

  p {
    margin: auto;
    margin-top: 10px;
    text-align: center;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 15px;
   align-items: center;
   justify-content: start;

    li {
      :hover {
        background: #2fdd10;
      }

      span {
        display: inline-block;
        margin-left: 5px;
      }
    }
  }
`;

export const Name = styled.p`
  text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
  letter-spacing: 4px;
  word-spacing: 4px;
  font-size: 35px;
`;

export const Tag = styled.p`
  color: #a7dd3c;
  background: #ffffff;
  text-shadow: 2px 0 0px #800040, 3px 2px 0px rgba(77, 0, 38, 0.5),
    3px 0 3px #ff002b, 5px 0 3px #800015, 6px 2px 3px rgba(77, 0, 13, 0.5),
    6px 0 9px #ff5500, 8px 0 9px #802a00, 9px 2px 9px rgba(77, 25, 0, 0.5),
    9px 0 18px #ffd500, 11px 0 18px #806a00, 12px 2px 18px rgba(77, 66, 0, 0.5),
    12px 0 30px #d4ff00, 14px 0 30px #6a8000, 15px 2px 30px rgba(64, 77, 0, 0.5),
    15px 0 45px #80ff00, 17px 0 45px #408000, 17px 2px 45px rgba(38, 77, 0, 0.5);
  font-size: 25px;
`;

export const Location = styled.p`
  font-family: Georgia, serif;
  font-size: 20px;
  letter-spacing: 0px;
  word-spacing: -1.8px;
  color: #000000;
  font-weight: 700;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-shadow: 2px 0 0px #800040, 3px 2px 0px rgba(77, 0, 38, 0.5),
    3px 0 3px #ff002b, 5px 0 3px #800015, 6px 2px 3px rgba(77, 0, 13, 0.5),
    6px 0 9px #ff5500, 8px 0 9px #802a00, 9px 2px 9px rgba(77, 25, 0, 0.5),
    9px 0 18px #ffd500, 11px 0 18px #806a00, 12px 2px 18px rgba(77, 66, 0, 0.5),
    12px 0 30px #d4ff00, 14px 0 30px #6a8000, 15px 2px 30px rgba(64, 77, 0, 0.5),
    15px 0 45px #80ff00, 17px 0 45px #408000, 17px 2px 45px rgba(38, 77, 0, 0.5),
    11px 15px 6px rgba(206, 89, 55, 0.65);
`;
