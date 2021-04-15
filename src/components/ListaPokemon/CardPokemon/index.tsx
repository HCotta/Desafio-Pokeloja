import { MdAddShoppingCart } from "react-icons/md";
import { Pokemon } from "models/Pokemon";
import { formatPrice } from "util/format";
import { Container, Card } from "./styles";
import { Link } from 'react-router-dom';
import { useGlobal } from "hooks/useGlobal";
import { memo, SyntheticEvent } from "react";

interface CardPokemonProps {
  pokemon: Pokemon,
  quantidade: number
}

function CardPokemon({ pokemon, quantidade }: CardPokemonProps) {
  const { adicionarPokemon } = useGlobal();

  const imagemAlternativa = (pokemon: Pokemon, event: SyntheticEvent<HTMLImageElement, Event>) => {
    pokemon.imagem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    event.currentTarget.src = pokemon.imagem;
  };

  return (
    <Card>
      <Container>
        <Link to={`/detalhes-pokemon/${pokemon.id}`}>
          <img
            onError={(event) => {
              imagemAlternativa(pokemon, event);
            }}
            src={pokemon.imagem}
            alt={pokemon.id + '-' + pokemon.nome} />
          <strong>{pokemon.nome}</strong>
          <span>{formatPrice(pokemon.valor)}</span>
        </Link>
        <button
          type="button"
          data-testid="add-product-button"
          onClick={() => adicionarPokemon(pokemon)}
        >
          <div data-testid="cart-product-quantity">
            <MdAddShoppingCart size={16} />
            {quantidade || 0}
          </div>

          <span>ADICIONAR</span>
        </button>
      </Container>
    </Card>
  );
};


export default memo(CardPokemon)