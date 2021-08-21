import React from 'react';
import GlobalStyle from './styles/global';

import Hand from './components/Hand/Hand';
import Main from './components/Main/Main';
import { Container } from './styles/styles';
import useAppContext from './hooks/useAppContext';

const App: React.FC = (): React.ReactElement => {
  const {
    state: { you, pc }
  } = useAppContext();
  return (
    <Container>
      <GlobalStyle />
      <Hand src={you.img.src} alt={you.img.alt} width={150} />
      <Main />
      <Hand src={pc.img.src} alt={pc.img.alt} width={150} />
    </Container>
  );
};

export default App;
