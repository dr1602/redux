import { PokeCard } from './PokeCard';
import { type PokeDetail } from '~/types/pokeTypes';

export const PokeList = ({ pokemons }: { pokemons: PokeDetail[] }) => {
  return (
    <>
      <div className='row w-100 justify-content-center '>
        {pokemons.map((pokemon) => (
          <PokeCard
            key={pokemon.name}
            name={pokemon.name}
            type={pokemon.types[0].type.name}
            imgUrl={pokemon.sprites.front_default}
            className='col-sm-3 m-3 cursor-pointer'
          />
        ))}
      </div>
    </>
  );
};
