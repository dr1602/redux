import { API_URL, LIMIT, OFFSET } from '~/const/apiConsts';
import type { PokemonResponseType } from '~/types/pokeTypes';

export const getPokemon = async () => {
  try {
    const res = await fetch(`${API_URL}?limit=${LIMIT}&offset=${OFFSET}`);

    if (!res.ok) {
      throw new Error(`HTTP-Error: ${res.status}`);
    }

    const data: PokemonResponseType = await res.json();
    return data.results;
  } catch (err) {
    console.error(`error: ${err}`);
    return undefined;
  }
};
