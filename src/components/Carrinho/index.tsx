import { MdDelete } from "react-icons/md";
import { GrFormAdd, GrFormSubtract, } from "react-icons/gr";
import { Container, Total, Content, FieldQuantity } from "./styles";
import { useGlobal } from 'hooks/useGlobal';
import { formatPrice } from 'util/format';

export function Carrinho() {
  const {
    carrinho,
    removerPokemon,
    atualizarQuantidadePokemon,
    valorTotalCarrinho,
    finalizarCompraPokemon
  } = useGlobal();

  return (
    <Container>
      <header>
        <strong>
          Carrinho
        </strong>
      </header>
      <section>
        {!carrinho.length ?
          (<h3>Carrinho vazio</h3>)
          :
          <>
            {
              carrinho.map((pokemon) => {
                return (
                  <Content key={pokemon.id + '-side-cart'}>
                    <figure>
                      <img src={pokemon.imagem} alt={pokemon.nome} loading="lazy" decoding="async" draggable={false} />
                      <FieldQuantity>
                        <button
                          type="button"
                          disabled={pokemon.quantidade <= 1}
                          onClick={() => atualizarQuantidadePokemon(pokemon.id, false)}
                        >
                          <GrFormSubtract size={20} />
                        </button>
                        <input
                          type="text"
                          readOnly
                          value={pokemon.quantidade}
                        />
                        <button
                          type="button"
                          disabled={pokemon.quantidade >= 99}
                          onClick={() => atualizarQuantidadePokemon(pokemon.id, true)}
                        >
                          <GrFormAdd size={20} />
                        </button>
                      </FieldQuantity>
                    </figure>
                    <strong>{pokemon.nome}</strong>
                    <strong>{formatPrice(pokemon.valor)}</strong>
                    <button
                      type="button"
                      className="button-remove"
                      onClick={() => removerPokemon(pokemon.id)}>
                      <MdDelete size={20} />
                    </button>
                  </Content>
                )
              })
            }
          </>
        }
      </section>


      <footer>
        <Total>
          <span>TOTAL</span>
          <strong>{formatPrice(valorTotalCarrinho)}</strong>
        </Total>

        <button
          type="button"
          disabled={!carrinho.length}
          onClick={() => { finalizarCompraPokemon() }}>
          Finalizar pedido
        </button>
      </footer>
    </Container>

  );
};