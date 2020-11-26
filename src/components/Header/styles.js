import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: #000;
    height: 100px;
    display: flex;
    align-items: center;
    box-shadow: 0 10px 40px rgba(34,34,103,0.80);
    position: fixed;
    top: 0;
`;

export const Title = styled.a`
    -webkit-text-stroke-width: 1px; /* largura da borda */
    -webkit-text-stroke-color: #fff; /* cor da borda */
    color: #222267;
    font-size: 30px;
    font-weight: bold;
    font-family: 'Righteous', cursive;
    padding: 15px;
`