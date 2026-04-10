import { useEffect } from 'react';
import { Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import logo from '../statics/logo.svg';
import { PokeList } from '~/components/PokeList';
import { Searcher } from '~/components/Searcher';
import { getPokemon } from '~/api/getPokemon';
import { getPokemonDetails } from '~/api/getPokemonDetails';
import { type RootState, type AppDispatch } from '~/store/store';
import { getPokemonsWithDetails } from '~/actions';

export function Welcome() {
  const pokemons = useSelector(
    (state: RootState) => state.pokemonData.pokemons,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokeRes = await getPokemon();

      if (pokeRes) {
        dispatch(getPokemonsWithDetails(pokeRes));
      }
    };

    fetchPokemons();
  }, [getPokemon, getPokemonsWithDetails, getPokemonDetails]);

  return (
    <main>
      <h1>Pokedux</h1>
      <Col span={4} offset={10} className='my-3'>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8} className='mt-3'>
        <Searcher />
      </Col>
      {pokemons && <PokeList pokemons={pokemons} />}
    </main>
  );
}
