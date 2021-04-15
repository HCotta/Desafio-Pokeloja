import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    id: number;
    title: string;
    largura:{
      maxWidth: string;
    },
    colors: {
      primary: string;
      secundary: string;
      background: string;
      text: string;
      icones: string;
      header: {
        background: string;
        text: string;
        icones: string;
      }
      card:{
        primaryBackground: string;
        secundaryBackground: string;
        text: string;
        icones: string;
      }
      button: {
        background: string;
        text: string;
        icones: string;
      };

    };
  }
}
