import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 5px;
  position: relative;
  margin: 1rem 2rem;
  flex: 1;

  input {
    height: 35px;
    min-width: 20px;
    width: 100%;
    position: relative;
    outline: none;
    border: none;
    padding: 0 50px 0 10px;
    font-size: 1rem;
  }

  svg {
    position: absolute;
    right: 0px;
    top: 0px;
    height: 35px;
    width: 35px;
    text-align: center;
    color: var(--headerBackground);
    cursor: pointer;
  }

  @media (max-width: 593px) {
    input {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    order: 3;
    flex: auto;
    margin: 1rem 0rem;
  }
`;
