import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary: ${(props) => props.theme.colors.primary};
    --secundary: ${(props) => props.theme.colors.secundary};
    --background: ${(props) => props.theme.colors.background};
    --text: ${(props) => props.theme.colors.text};
    --icones: ${(props) => props.theme.colors.icones};
    --headerBackground: ${(props) => props.theme.colors.header.background};
    --headerText: ${(props) => props.theme.colors.header.text};
    --headerIcones: ${(props) => props.theme.colors.header.icones};
    --cardPrimaryBackground: ${(props) =>
      props.theme.colors.card.primaryBackground};
    --cardSecundaryBackground: ${(props) =>
      props.theme.colors.card.secundaryBackground};
    --cardText: ${(props) => props.theme.colors.card.text};
    --cardIcones: ${(props) => props.theme.colors.card.icones};
    --buttonBackground: ${(props) => props.theme.colors.button.background};
    --buttonText: ${(props) => props.theme.colors.button.text};
    --buttonIcones: ${(props) => props.theme.colors.button.icones};
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (Desktop)
  html {
    @media (max-width: 1080px) {
        font-size: 93.75%; // 15px
    }

    @media (min-width: 720px) {
        font-size: 87.5%; // 14px
     
    }
  }

  body {
    background: var(--background);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', Arial, sans-serif;
    font-weight: 400;
  }

  body, input, button {
    font: 1rem Roboto, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  
  button {
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  main {
    margin: 0 auto;
    margin-top: -30px;
    display: flex;
    max-width: ${(props) => props.theme.largura.maxWidth};
    padding: 0 1rem;
  
    @media (max-width: 1024px) {
      flex-direction: column-reverse;
    }  
  }
`;
