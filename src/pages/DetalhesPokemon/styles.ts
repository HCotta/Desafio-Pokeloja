import styled from 'styled-components';

export const Chip = styled.div`
      color: rgba(0, 0, 0, 0.87);
      border: none;
      cursor: default;
      height: 1.3rem;
      display: inline-flex;
      outline: 0;
      padding: 0;      
      align-items: center;
      border-radius: 16px;
      vertical-align: middle;
      justify-content: center;
      background-color: var(--buttonText);
      margin: 0.5rem;
      margin-left: 0;
      
      span {
        overflow: hidden;
        white-space: nowrap;
        padding-left: 12px;
        padding-right: 12px;
        text-overflow: ellipsis;
        font-weight: bold;
        font-size: 0.7rem;
      }
`;


export const CardAbout = styled.section`
  display: flex;
  color: var(--cardText);
  position: relative;
  font-size: 1.2rem;

  figure {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    img:first-child {
      width: 100%;
    }

    img {
      width: 50%;
    }
  }

  div {
    flex: 2;
    h1 {
      font-size: 5rem;
    }

    .chip {
      color: rgba(0, 0, 0, 0.87);
      border: none;
      cursor: default;
      height: 1.3rem;
      display: inline-flex;
      outline: 0;
      padding: 0;
      align-items: center;
      border-radius: 16px;
      vertical-align: middle;
      justify-content: center;
      background-color: var(--buttonText);
      margin: 0.5rem;
      margin-left: 0;

      span {
        overflow: hidden;
        white-space: nowrap;
        padding-left: 12px;
        padding-right: 12px;
        text-overflow: ellipsis;
        font-weight: bold;
        font-size: 0.7rem;
      }
    }
  }
`;
