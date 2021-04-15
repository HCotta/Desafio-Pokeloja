import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { Pokemon } from 'models/Pokemon';
import Swal from 'sweetalert2';
import { formatPrice } from 'util/format';
import usePersistedState from 'util/usePersistedState';

interface GlobalProviderProps {
  children: ReactNode;
}

interface GlobalContextData {
  carrinho: Pokemon[];
  filtro: string;
  valorTotalCarrinho: number;
  quantidadeTotalCarrinho: number;
  limparCarrinho: () => void;
  filtrarPokemon: (pokemon: Pokemon[]) => Pokemon[];
  setFiltroPokemon: (novoFIltro: string) => void;
  adicionarPokemon: (pokemon: Pokemon) => void;
  removerPokemon: (idPokemon: number) => void;
  atualizarQuantidadePokemon: (idPokemon: number, isAdicao: boolean) => void;
  finalizarCompraPokemon: () => void;
}

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);



export function GlobalProvider({ children }: GlobalProviderProps): JSX.Element {

  const [quantidadeTotalCarrinho, setQuantidadeTotalCarrinho] = useState(0);
  const [valorTotalCarrinho, setValorTotalCarrinho] = useState(0);
  const [filtro, setFiltro] = useState("");
  const [carrinho, setCarrinho] = usePersistedState<Pokemon[]>("@PokeLoja:Carrinho", []);

  const retornarTotalizadores = (carrinhoAtualizado: Pokemon[]) => {
    return carrinhoAtualizado.reduce((acumulo, pokemon) => {
      const valor = pokemon.valor * pokemon.quantidade;

      return {
        quantidadeTotal: acumulo.quantidadeTotal + pokemon.quantidade,
        valorTotal: acumulo.valorTotal + valor
      };

    }, { quantidadeTotal: 0, valorTotal: 0 })
  }

  useEffect(() => {
    const { valorTotal, quantidadeTotal } = retornarTotalizadores(carrinho);
    setValorTotalCarrinho(valorTotal);
    setQuantidadeTotalCarrinho(quantidadeTotal);
  }, [carrinho]);
  
 

  const filtrarPokemon = (listaPokemon: Pokemon[]) => {

    return !filtro || !filtro.length
      ? listaPokemon
      : listaPokemon.filter(pokemon =>
        pokemon.nome.includes(filtro.toUpperCase())
      );
  }

  const setFiltroPokemon = (novoFiltro: string) => {
    setFiltro(novoFiltro);
  }

  const atualizarQuantidadePokemon = (idPokemon: number, isAdicao: boolean) => {

    try {

      const novoCarrinho = carrinho.map((pokemon) => {
        if (idPokemon === pokemon.id) {
          const novaQuantidade = isAdicao ? 1 : -1;
          pokemon = {
            ...pokemon,
            quantidade: pokemon.quantidade + novaQuantidade,
          };
        }
        if (pokemon.quantidade <= 0) {
          throw new Error("Erro: a quantidade de um pokemon no carrinho deve ser no mínimo 1!");
        }
        return pokemon;
      });

      setCarrinho([...novoCarrinho]);

    } catch {
      console.error("Erro em atualizar quantidade do produto");
    }

  };

  const removerPokemon = (idPokemon: number) => {
    try {
      const numeroDePokemonNoCarrinho = carrinho.length;

      const carrinhoComPokemonRemovido = carrinho.filter(
        (pokemon) => pokemon.id !== idPokemon
      );

      if (numeroDePokemonNoCarrinho === carrinhoComPokemonRemovido.length) {
        throw new Error("Erro na remoção do pokemon");
      }

      setCarrinho([...carrinhoComPokemonRemovido]);
    } catch {
      console.error("Erro na remoção do pokemon");
    }
  }

  const adicionarPokemon = (novoPokemon: Pokemon) => {
    try {
      const novoPokemonAdicionado = carrinho.find((pokemon) => pokemon.id === novoPokemon.id);

      if (!novoPokemonAdicionado) {
        const pokemonAdicionado = {
          ...novoPokemon,
          quantidade: 1,
        };

        setCarrinho([pokemonAdicionado, ...carrinho]);
        return;
      }

      atualizarQuantidadePokemon(novoPokemon.id, true);
    } catch {
      console.error("Erro na adição do produto");
    }
  }
  const limparCarrinho = () => {
    setCarrinho([]);
  }
  const finalizarCompraPokemon = () => {
    Swal.fire({
      title: 'Obrigado pela compra!',
      text: `Você ganhou um cashback de: ${formatPrice(0.25 * valorTotalCarrinho)} (25%) da compra realizada`,
      icon: 'success',
      confirmButtonText: 'Continuar comprando'
    });
    limparCarrinho();
  };

  return (
    <GlobalContext.Provider
      value={{
        carrinho,
        limparCarrinho,
        valorTotalCarrinho,
        quantidadeTotalCarrinho,
        filtro,
        setFiltroPokemon,
        filtrarPokemon,
        removerPokemon,
        adicionarPokemon,
        atualizarQuantidadePokemon,
        finalizarCompraPokemon
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal(): GlobalContextData {
  const context = useContext(GlobalContext);

  return context;
}
