import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--headerBackground);
`;

export const Content = styled.nav`
  max-width: 90rem;
  margin: 0 auto;
  /* max-width: ${(props) => props.theme.largura.maxWidth}; */
  padding: 1rem 1rem 5rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;

    img {
      width: 3.5rem;
      margin-right: 10px;
    }
  }

  @media (max-width: 768px) {
    a {
      width: 80%;
    }
    padding-top: 1rem;
    padding-bottom: 2.5rem;
  }
`;

export const IconeCart = styled.div`
  position: relative;
  transition: filter 0.2s;
  cursor: pointer;
  svg {
    color: var(--icones);
    &:hover {
      filter: brightness(0.9);
    }
  }

  span {
    position: absolute;
    background-color: var(--headerIcones);
    color: var(--headerText);
    width: 23px;
    text-align: center;
    border-radius: 15px;
    height: 23px;
    line-height: 22px;
    right: -8px;
  }
`;
