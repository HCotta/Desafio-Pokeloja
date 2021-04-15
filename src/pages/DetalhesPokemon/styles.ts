import styled from 'styled-components';

export const CardAbout = styled.div`
  color: var(--cardText);
  position: relative;
  
  padding: 1rem;
  width: 100%;

  a {
    position: absolute;
  }

  section {
    display:flex;
    flex-wrap: wrap;

    h1 {
      font-size: 4rem;
    }
  }
`;

export const ContentImg = styled.div`
  
`;

export const ContentInfo = styled.div`
  padding: 1rem;
  flex: 8 ;

  button {
    width: 50%;
    background: var(--buttonBackground);
    color: var(--buttonText);
    border: 0;
    border-radius: 4px;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    transition: background 0.2s;

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
