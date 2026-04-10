import type {  Dispatch } from '@reduxjs/toolkit'

import { SET_POKEMONS } from '~/types/actionTypes';
import type { PokeDetail, PokemonDataType } from '~/types/pokeTypes';
import { getPokemonDetails } from '~/api/getPokemonDetails';

export const setPokemons = (payload: PokeDetail[]) => ({
  type: SET_POKEMONS,
  payload,
});

export const getPokemonsWithDetails =
  (pokemons: PokemonDataType[] = []) =>
  async (dispatch: Dispatch) => {
    if (pokemons.length > 0) {
      const pokeDetailsRaw = await Promise.all(
        pokemons.map((poke: PokemonDataType) => getPokemonDetails(poke)),
      );

      const pokeDetails = pokeDetailsRaw.filter(
        (poke): poke is PokeDetail => poke !== undefined,
      );

      dispatch(setPokemons(pokeDetails));
    }
  };
