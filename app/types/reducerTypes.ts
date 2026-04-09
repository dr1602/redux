import type { SET_POKEMONS } from './actionTypes';
import type { PokemonDataType } from './pokeTypes';

export interface PokemonState {
  pokemons: PokemonDataType[];
}

export interface PokemonAction {
  type: typeof SET_POKEMONS;
  payload: PokemonDataType[];
}


