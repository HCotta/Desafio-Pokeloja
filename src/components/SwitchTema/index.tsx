import { FiSettings } from "react-icons/fi";
import { ButtonFixed, Container } from "./styles";
import { useState } from 'react';
import { useGlobal } from "hooks/useGlobal";


interface SwitchTemaProps {
  selecionarTema(string: string): void;
}

export function SwitchTema({ selecionarTema }: SwitchTemaProps) {
  const [exibirSwitchTema, setExibirSwitchTema] = useState<boolean>(false);
  const { limparCarrinho } = useGlobal();

  const selecionarNovoTema = (tema: string) => {
    selecionarTema(tema)
    limparCarrinho();
  }

  return (
    <>
      <ButtonFixed>
        <FiSettings onClick={() => setExibirSwitchTema(!exibirSwitchTema)} size={36}></FiSettings>
      </ButtonFixed >
      {exibirSwitchTema &&
        <Container>
          <ul>
            <li>
              <button onClick={() => selecionarNovoTema("FIRE")}> FIRE </button>
            </li>
            <li>
              <button onClick={() => selecionarNovoTema("ELECTRIC")}> ELETRIC </button>
            </li>
            <li>
              <button onClick={() => selecionarNovoTema("WATER")}> WATER </button>
            </li>
            <li>
              <button onClick={() => selecionarNovoTema("GRASS")}> GRASS </button>
            </li>
          </ul>
        </Container>
      }
    </>
  );
};