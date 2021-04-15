import { useParams } from 'react-router-dom'
import { getPokemon } from 'services/api';
import { CardAbout, Chip } from './styles'
import { useEffect, useState } from 'react';
import { PokemonAbout } from 'models/AdapterPokemon';
import { Card } from './../../components/ListaPokemon/CardPokemon/styles';

export function DetalhesPokemon() {
  const { id } = useParams<Record<string, string | undefined>>();
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

  return (
      <main>
        <Card>
          <CardAbout>
            <figure>
              <img
                src={pokemonAbout.imagem}
                alt={"imagem do pokemon" + pokemonAbout.nome} />
            </figure>
            <div>
              <h1>
                {pokemonAbout.nome} #{pokemonAbout.id}
              </h1>
              <div>
                <strong>Altura:</strong>
                {pokemonAbout.altura}
              </div>
              <div>
                <strong>Peso:</strong>
                {pokemonAbout.peso}
              </div>
              <div>
                <div>
                  <strong>Status</strong>:
              </div>
                {pokemonAbout.status?.map((status) => {
                  return (
                    <Chip>
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
                <div>
                  <strong>Movimentos</strong>:
              </div>
                {pokemonAbout.movimentos?.map((movimento) => {
                  return (
                    <Chip key={movimento}>
                      <span>
                        {movimento}
                      </span>
                    </Chip>
                  )
                })}
              </div>
              <div>
                <div>
                  <strong>Tipo</strong>:
              </div>
                {pokemonAbout.tipo?.map((tipo) => {
                  return (
                    <Chip>
                      <span>
                        {tipo}
                      </span>
                    </Chip>
                  )
                })}
              </div>
            </div>
          </CardAbout>
          {/* 
        status: Array<Status[]>;
        tipo: Array<string[]>; */}
        </Card>
      </main>
  );
}