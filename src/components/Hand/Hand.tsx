import React from 'react';
import { Image } from './styles';

type Props = {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
};

const Hand: React.FC<Props> = ({
  src,
  alt,
  className,
  ...props
}): React.ReactElement => {
  return <Image className={className} src={src} alt={alt} {...props} />;
};

export default Hand;
