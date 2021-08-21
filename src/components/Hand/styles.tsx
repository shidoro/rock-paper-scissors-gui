import styled from 'styled-components';

export const Image = styled.img`
  width: ${({ width }) => width || '200px'};
  height: ${({ height }) => height || 'auto'};
  src: ${({ src }) => src};
  alt: ${({ alt }) => alt || ''};
`;
