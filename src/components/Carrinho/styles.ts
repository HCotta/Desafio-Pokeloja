import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.aside`
  padding: 1rem;
  min-width: 30%;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  margin: 0 1rem;
  height: max-content;
  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.12);
  flex: 1;
  
  header {
    font-size: 3rem;
    color: #333;
    border-bottom: 1px solid #eee;
    margin-bottom: 2rem;
  }

  section {
    max-height: calc(100vh - 360px);
    overflow: hidden;
    overflow-y: auto;
    padding: 0 0.3rem;

    figure {
      text-align: center;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar {
      width: 0.6rem;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: var(--buttonBackground);
    }
  }

  footer {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    button {
      background: var(--buttonBackground);
      color: var(--buttonText);
      width: 100%;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${(props) =>
          darken(0.08, props.theme.colors.button.background)};
      }
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    margin: 1rem 0;
  }

  @media (max-width: 768px) {
    div {
      font-size: 1.3rem;
    }
  }
`;

export const FieldQuantity = styled.div`
  display: flex;

  input {
    border: 1px solid #ddd;
    border-left: 0;
    border-right: 0;
    color: #666;
    padding: 6px;
    width: 35px;
  }

  button {
    &:first-child {
      border-right: 0;
    }

    &:last-child {
      border-left: 0;
    }
    padding: 1px 1px;
    border: 1px solid #ddd;
    background: none;
  }
`;

export const Content = styled.div`
  color: #333333;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0 10px;
  border-radius: 5px;
  margin-bottom: 0.5rem;

  .button-remove {
    padding: 6px;
    cursor: pointer;
    background: none;
    border: none;
    position: absolute;
    top: 0;
    right: 0;

    svg {
      color: var(--buttonBackground);
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${(props) => darken(0.08, props.theme.colors.button.background)};
      }
    }
  }

  figure {
    border-right: 1px solid #ddd;
    padding: 0 0.5rem 0.5rem 0;
  }

  img {
    height: 60px;
  }

  strong {
    font-size: 1.2rem;
    padding: 1rem 0.5rem;
  }

  @media (max-width: 520px) {
    justify-content: center;
    flex-direction: column;
    text-align: center;

    figure {
      border: none;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
  color: #333;
  font-weight: bold;
  font-size: 1.8rem;

  strong {
    margin-left: 5px;
  }
`;
