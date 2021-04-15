import { Container } from "./styles";
import { CgPokemon } from 'react-icons/cg';
import { useGlobal } from "hooks/useGlobal";

export function BuscaPokemon() {
  const { setFiltroPokemon } = useGlobal();

  const buscarPokemon = (event: any) => {
    if (event.key === 'Enter') {
      setFiltroPokemon(event.target.value);
    }
  }

  return (
    <Container>
      <input
        type="text"
        placeholder="Busque aqui seu pokemon"
        defaultValue=""
        onKeyDown={buscarPokemon}
      />
      <CgPokemon className="icon"></CgPokemon>
    </Container>
  );
};
