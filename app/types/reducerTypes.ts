import type { SET_POKEMONS } from './actionTypes';
import type { PokeDetail } from './pokeTypes';

export interface PokemonState {
  pokemons: PokeDetail[];
}

export interface PokemonAction {
  type: typeof SET_POKEMONS;
  payload: PokeDetail[];
}


