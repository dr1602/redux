import { PokeCard } from './PokeCard';
import { type PokemonDataType } from '~/types/pokeTypes';

export const PokeList = ({ pokemons }: { pokemons: PokemonDataType[] }) => {
  return (
    <>
      <div className='row w-100 justify-content-center '>
        {pokemons.map((pokemon) => (
          <PokeCard
            key={pokemon.name}
            name={pokemon.name}
            className='col-sm-3 m-3'
          />
        ))}
      </div>
    </>
  );
};
