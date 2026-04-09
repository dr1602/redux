import { type Middleware } from '@reduxjs/toolkit';
import { pokemonsreducer } from '~/reducers/pokemonsReducer';

import { type RootState } from '~/store/store';
import { SET_POKEMONS } from '~/types/actionTypes';

export const logger: Middleware<{}, RootState> =
  (_store) => (next) => (action) => {
    console.log(action);
    return next(action);
  };

export const featuring: Middleware<{}, RootState> =
  (_store) => (next) => (action: any) => {
    if (action.type === SET_POKEMONS && action.payload) {
      const featured = [{ name: 'Grace' }, ...action.payload];

      const updatedActionInfo = {
        ...action,
        payload: featured,
      };

      return next(updatedActionInfo);
    }

    return next(action);
  };

export const upperCaseMiddleware: Middleware<{}, RootState> =
  (_store) => (next) => (action: any) => {
    if (action.type === SET_POKEMONS && action.payload) {
      const upperCasePayload = action.payload.map((pokemon: any) => ({
        ...pokemon,
        name: pokemon.name.toUpperCase(),
      }));

      const updatedAction = {
        ...action,
        payload: upperCasePayload,
      };

      return next(updatedAction);
    }

    return next(action);
  };
