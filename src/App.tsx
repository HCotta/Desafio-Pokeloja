import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';

import { GlobalProvider } from 'hooks/useGlobal';
import { Header } from 'components/Header';
import { Routes } from 'routes/routes';
import { ThemeProvider } from 'styled-components';
import { water } from 'styles/themes/water';
import { electric } from 'styles/themes/electric';
import { grass } from 'styles/themes/grass';
import { fire } from 'styles/themes/fire';
import { DefaultTheme } from "styled-components";
import usePersistedState from 'util/usePersistedState';
import { SwitchTema } from './components/SwitchTema/index';

interface SelecaoDeThema {
  [key: string]: DefaultTheme;
}

const themas: SelecaoDeThema = {
  'FIRE': fire,
  'WATER': water,
  'ELECTRIC': electric,
  'GRASS': grass,
};


export function App() {
  const [theme, setThema] = usePersistedState<DefaultTheme>('@PokeLoja:Thema', fire);

  const selecionarTema = (lojaSelecionada: string) => {
    try {
      const tema = themas[lojaSelecionada];
      if (tema.title) {
        setThema(tema);
      }
    } catch (error) {
      alert("Ocorreu um erro ao carregar o thema da loja");
    }
  };

  return (
    <BrowserRouter>
      <GlobalProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <SwitchTema selecionarTema={selecionarTema}></SwitchTema>
          <Header></Header>
          <Routes />
        </ThemeProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
}