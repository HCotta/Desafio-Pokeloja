import { useContext, useEffect, useState } from "react";
import { Pokemon } from "models/Pokemon";
import { getListPokemon } from "services/api";
import { Container, Content } from "./styles";
import CardPokemon from "./CardPokemon";
import { useGlobal } from "../../hooks/useGlobal";
import { ThemeContext } from "styled-components";


interface CarrinhoPokemonQuantidade {
  [key: number]: number;
}

export function ListaPokemon() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const { carrinho, filtro, filtrarPokemon } = useGlobal();
  const { id } = useContext(ThemeContext)



  const carrinhoPokemonQuantidade = carrinho.reduce((acumulo, pokemon) => {
    return { ...acumulo, [pokemon.id]: pokemon.quantidade };
  }, {} as CarrinhoPokemonQuantidade)

  useEffect(() => {
    (async () => {
      try {
        setPokemon(await getListPokemon(id));
      } catch (error) {
        alert("Ocorreu um erro ao carregar pokemon");
      }
    })()
  }, [id]);

  useEffect(() => {
    setPokemon(filtrarPokemon(pokemon));
  }, [filtro]);

  

  return (
    <Container>
      <Content>
        {pokemon.map((pokemon) => {
          return (
            <CardPokemon
              key={pokemon.id + '-card-pokemon'}
              pokemon={pokemon}
              quantidade={carrinhoPokemonQuantidade[pokemon.id]} />
          )
        })}
      </Content>
    </Container>
  );
};



