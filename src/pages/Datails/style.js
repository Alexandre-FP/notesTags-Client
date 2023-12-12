import styled from "styled-components";

export const Containter = styled.div` // criando um component usando styled
    width: 100%;
    height: 100vh;
    
    
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content"
`;
