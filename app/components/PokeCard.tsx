import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Meta } from 'antd/es/list/Item';

interface PokeCardProps {
  name: string;
  className?: string;
  type: string;
  imgUrl: string;
}

export const PokeCard = ({ name, type, imgUrl, className }: PokeCardProps) => {
  return (
    <Card
      title={name}
      className={className}
      extra={<StarOutlined />}
      cover={<img src={imgUrl} alt={name} className='w-100' />}>
      <Meta description={type} />
    </Card>
  );
};
