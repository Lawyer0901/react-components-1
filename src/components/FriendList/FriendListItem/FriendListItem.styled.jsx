import styled from "@emotion/styled";

export const Status = styled.span`
    display: block;
    width: 10px;
    height: 10px;
    background-color: ${props => props.isOnline ? "#4fbf5e" : "#ab1010"}; 
`