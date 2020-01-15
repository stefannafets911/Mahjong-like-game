import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    min-height: 100vh;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    background: #222222;
    flex-direction: column;
`;

export const WrapperTitle = styled.div`
    color: white;
    font-size: 3rem;
    font-family: sans-serif;
    margin: 2rem 0;
`;

export const WrapperContent = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    width: 100%;
`;