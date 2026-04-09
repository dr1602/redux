import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Meta } from 'antd/es/list/Item';

import type { PokemonDataType } from '~/types/pokeTypes';

interface PokeCardProps extends PokemonDataType {
  className?: string;
}

export const PokeCard = ({ name, type, className }: PokeCardProps) => {
  return (
    <Card
      title={name}
      className={className}
      extra={<StarOutlined />}
      cover={
        <img
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
          alt={name}
          className='w-100'
        />
      }>
      <Meta description={type} />
    </Card>
  );
};
