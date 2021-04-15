import { darken } from 'polished';
import styled from 'styled-components';

export const Card = styled.div`
  position: relative;  
  background: var(--cardPrimaryBackground);
  border-radius: 5px;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 50%;
    top: 0;
    background: linear-gradient(
      to top,
      transparent,
      var(--cardSecundaryBackground)
    );
  }
  
  &::after {
    content:  '${props => props.theme.title}' ;
    position: absolute;
    top: 2px;
    right: 5px;
    font-weight: bold;
    font-size: 2em;    
    color: rgba(0, 0, 0, 0.06);
  }

  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.12);
`;

export const Container = styled.li`
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  
  a {
    color: var(--cardText);
    display: flex;
    flex-direction: column;
    text-decoration: none;

    img {
      align-self: center;
      width: 100%;
      height: 100%;
    }

    > strong {
      font-size: 1rem;
      line-height: 20px;
      margin-top: 5px;
    }

    > span {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 5px 0 10px;
    }
  }

  button {
    width: 100%;
    background: var(--buttonBackground);
    color: var(--buttonText);
    border: 0;
    border-radius: 4px;
    margin-top: auto;
    display: flex;
    align-items: center;
    transition: background 0.2s;

    &:hover {      
      background: ${props => darken(0.08, props.theme.colors.button.background)};
    }

    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);

      svg {
        color: var(--buttonIcones);
        margin-right: 5px;
      }
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
`;
