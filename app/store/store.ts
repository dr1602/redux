import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
  type Action,
} from '@reduxjs/toolkit';
import { thunk, type ThunkDispatch } from 'redux-thunk';

import { pokemonsreducer } from '~/reducers/pokemonsReducer';
import { logger } from '~/middlewares';

export const rootReducer = combineReducers({
  pokemonData: pokemonsreducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const composeAlt =
  (typeof window !== 'undefined' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeAlt(applyMiddleware(logger, thunk));

export const store = createStore(rootReducer, composedEnhancers);

export type AppDispatch = ThunkDispatch<RootState, undefined, Action>;
