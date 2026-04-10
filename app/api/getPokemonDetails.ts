import type { PokemonDataType, PokeDetail } from '~/types/pokeTypes';

export const getPokemonDetails = async (pokemon: PokemonDataType) => {
  try {
    const res = await fetch(pokemon.url as string);

    if (!res.ok) {
      throw new Error(`HTTP-Error: ${res.status}`);
    }

    const data: PokeDetail = await res.json();
    return data;
  } catch (err) {
    console.error(`error: ${err}`);
    return undefined;
  }
};
