import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from '@reduxjs/toolkit';

import { pokemonsreducer } from '~/reducers/pokemonsReducer';
import { featuring, logger, upperCaseMiddleware } from '~/middlewares';

export const rootReducer = combineReducers({
  pokemonData: pokemonsreducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const composeAlt =
  (typeof window !== 'undefined' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeAlt(
  applyMiddleware(logger, featuring, upperCaseMiddleware),
);

export const store = createStore(rootReducer, composedEnhancers);
