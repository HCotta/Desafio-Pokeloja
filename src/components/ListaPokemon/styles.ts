import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
`;

export const Content = styled.ul`  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  grid-gap: 10px;
  list-style: none;
  h3 {
    margin: 4rem;
    text-align: center;
  }
`;
