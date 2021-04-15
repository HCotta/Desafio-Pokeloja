import styled from 'styled-components';

export const ButtonFixed = styled.button`
  position: absolute;
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
  display: flex;
  flex-wrap: wrap;
  opacity: 0.9;
  background: #fff;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    list-style: none;

    li {
      margin: 0 1rem;

      button {
        background: none;
        padding: 5px 10px;
      }
    }
  }
`;
