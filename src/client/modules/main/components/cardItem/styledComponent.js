import styled from 'styled-components';

export const CardBlock = styled.div`
    background-color: ${props => props.isVisible ? '#ff6500' : '#0079ad'};
    pointer-events: ${props => props.isVisible ? 'none' : 'auto'};
    width: 9rem;
    border-radius: 0.5rem;
    margin-bottom: 3rem;
    margin-right: 2rem;
    height: 9rem;
    transition: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0.5rem #ffffff61;
    :hover{
      background-color: ${props => props.isVisible ? '#ff6500' : '#5585c1'};
    }
`;

export const Title = styled.p`
    color: white;
    font-size: 3rem;
    text-transform: capitalize;
    font-family: sans-serif;
    display: ${props => props.isVisible ? 'block' : 'none'};
`;
