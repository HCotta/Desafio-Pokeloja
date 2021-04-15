import styled from 'styled-components';

export const ButtonFixed = styled.button`
  position: fixed;
  top: 160px;
  right: 0;
  width: 48px;
  height: 48px;
  text-align: center;
  cursor: pointer;
  margin: 0;
  pointer-events: auto;
  opacity: 0.9;
  z-index: 998;
  border: none;
  background: #fff;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
`;
export const Container = styled.section`
  padding: 1rem 0;
  position: fixed;
  display: flex;  
  opacity: 0.9;
  background: #fff;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  justify-content: center;
  align-items: center;
  z-index: 999;
  width: 100%;

  ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    li {
      margin: 0.5rem 1rem;
      
      button {
        background: none;
        padding: 5px 10px;
      }
    }
  }
`;
