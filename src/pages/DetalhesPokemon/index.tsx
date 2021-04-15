import { useParams } from 'react-router-dom'
import { getPokemon } from 'services/api';
import { CardAbout, Chip, ContentImg, ContentInfo } from './styles'
import { useEffect, useState } from 'react';
import { PokemonAbout } from 'models/AdapterPokemon';
import { Card } from './../../components/ListaPokemon/CardPokemon/styles';
import { MdAddShoppingCart, MdKeyboardBackspace } from 'react-icons/md';
import { useGlobal } from 'hooks/useGlobal';
import { Link } from 'react-router-dom';
import { Carrinho } from 'components/Carrinho';

export function DetalhesPokemon() {
  const { id } = useParams<Record<string, string | undefined>>();
  const { adicionarPokemon } = useGlobal();
  const [pokemonAbout, setPokemonAbout] = useState<PokemonAbout>({} as PokemonAbout);

  useEffect(() => {
    (async () => {
      try {
        setPokemonAbout(await getPokemon(`${id}`));
      } catch (error) {
        alert("Ocorreu um erro ao carregar pokemon");
      }
    })();
  }, [id]);

  const adicionarNoCrrinho = (pokemon: PokemonAbout) => {
    adicionarPokemon({
      id: pokemon.id,
      nome: pokemon.nome,
      valor: pokemon.nome.length * 10,
      imagem: pokemon.imagem,
      quantidade: 1
    });
  }

  return (
    <main>
      <Card>
        <CardAbout>
          <Link to="/">
            <MdKeyboardBackspace size={32} color="#fff" />
          </Link>
          <section>
            <ContentImg>
              <img
                src={pokemonAbout.imagem}
                alt={"imagem do pokemon" + pokemonAbout.nome} />

            </ContentImg>
            <ContentInfo>
              <header>
                <h1> {pokemonAbout.nome} #{pokemonAbout.id}</h1>
              </header>

              <div>
                <div>
                  <strong>Status</strong>:
                </div>
                {pokemonAbout.status?.map((status) => {
                  return (
                    <Chip key={status.nome}>
                      <span>
                        {status.nome}:{status.valor}
                      </span>
                    </Chip>
                  )
                })}
              </div>
              <div>
                <div>
                  <strong>Habilidades</strong>:
                </div>
                {pokemonAbout.habilidades?.map((habilidade) => {
                  return (
                    <Chip key={habilidade}>
                      <span>
                        {habilidade}
                      </span>
                    </Chip>
                  )
                })}
              </div>
              <div>
                <strong>Tipo</strong>:
                <ul>
                  {pokemonAbout.tipo?.map((tipo) => {
                    return (
                      <Chip key={tipo}>
                        <span>
                          {tipo}
                        </span>
                      </Chip>
                    )
                  })}
                </ul>
              </div>
              <div>
                <strong>Altura:</strong>
                {pokemonAbout.altura}
              </div>
              <div>
                <strong>Peso:</strong>
                {pokemonAbout.peso}
              </div>

              <button
                type="button"
                data-testid="add-product-button"
                onClick={() => adicionarNoCrrinho(pokemonAbout)}>

                <div>
                  <MdAddShoppingCart size={16} />
                </div>

                <span>ADICIONAR</span>
              </button>
            </ContentInfo>
          </section>

        </CardAbout>
      </Card>
      <Carrinho />
    </main>
  );
}