// https://jsonformatter.org/json-to-typescript
export interface AdapterPokemon {
  abilities: AbilityElement[];
  height: number;
  id: number;
  moves: Move[];
  name: string;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface PokemonAbout {
  habilidades: string[];
  altura: number;
  peso: number;
  id: number;
  movimentos: string[];
  nome: string;
  imagem: string;
  status: Status[];
  tipo: string[];
}

export interface Status {
  nome: string;
  valor: number;
}

interface AbilityElement {
  ability: MoveClass;
}

interface MoveClass {
  name: string;
}

interface Move {
  move: MoveClass;
}

interface Sprites {
  front_default: string;
  other: Other;
}

interface Other {
  dream_world: DreamWorld;
  'official-artwork': DreamWorld;
}

interface DreamWorld {
  front_default: string;
}

interface Stat {
  base_stat: number;
  stat: MoveClass;
}

interface Type {
  type: MoveClass;
}

export const ConvertePokemonJson = (data: AdapterPokemon) => {
  return {
    habilidades: data.abilities.map((tipo) => tipo.ability.name),
    altura: data.height,
    peso: data.weight,
    id: data.id,
    movimentos: data.moves.map((tipo) => tipo.move.name),
    nome: data.name.toUpperCase(),
    imagem: (() => {
      const imagemDefault =
        data.sprites.other['official-artwork'].front_default;
      const imagemReserva = data.sprites.other.dream_world.front_default;
      const imagemFrontDefault = data.sprites.front_default;

      return imagemDefault || imagemReserva || imagemFrontDefault;
    })(),
    status: data.stats.map((tipo) => {
      return { nome: tipo.stat.name, valor: tipo.base_stat };
    }),
    tipo: data.types.map((tipo) => tipo.type.name),
  };
};
