import axios from 'axios';
import { ConvertePokemonJson } from 'models/AdapterPokemon';

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});



export const getPokemon = (idPokemon: string) => {
  return api.get(`pokemon/${idPokemon}/`).then((response) => {
    return ConvertePokemonJson(response.data);
  });
};

export const getListPokemon = (type: number) => {
  return api.get(`type/${type}/`).then((response) => {
    return response.data.pokemon.map((pokeRes: any) => {
      const identificadorDoPokemon = pokeRes.pokemon.url
        .replaceAll('/', '')
        .split('pokemon')[1];

      const urlImgPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${identificadorDoPokemon}.png`;

      return {
        id: identificadorDoPokemon,
        nome: pokeRes.pokemon.name.toUpperCase(),
        imagem: urlImgPokemon,
        valor: pokeRes.pokemon.name.length * 10,
      };
    });
  });
};
