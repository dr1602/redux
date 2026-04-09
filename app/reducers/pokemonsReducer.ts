import { SET_POKEMONS } from '~/types/actionTypes';
import type { PokemonAction, PokemonState } from '~/types/reducerTypes';

const initialState: PokemonState = {
  pokemons: [],
};

export const pokemonsreducer = (
  state: PokemonState = initialState,
  action: PokemonAction,
) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    default:
      return state;
  }
};
