import { SET_POKEMONS } from '~/types/actionTypes';
import type { PokemonDataType } from '~/types/pokeTypes';

export const setPokemons = (payload: PokemonDataType[]) => ({
  type: SET_POKEMONS,
  payload,
});
