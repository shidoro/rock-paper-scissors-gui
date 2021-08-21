import React, { useEffect } from 'react';
import {
  HandType,
  Player
} from '@shidoro/rock-paper-scissors-cli/bin/types/types';
import {
  availableTypes,
  getRandomHandType,
  getWinner
} from '@shidoro/rock-paper-scissors-cli/bin/game/gameLogic';

import useAppContext from '../../hooks/useAppContext';

import { Container, Button, Wrapper, Text, WrapperWinningText } from './styles';

const Main: React.FC = (): React.ReactElement => {
  const { state, dispatch } = useAppContext();
  const { gameStarted } = state;

  const handleUserChoice = (choice: HandType) => {
    if (!gameStarted) {
      const computer: Player = {
        player: getRandomHandType(availableTypes),
        message: "I'm not a human, I'm smarter."
      };
      dispatch({
        type: 'start',
        payload: { playerChoice: choice, computerChoice: computer }
      });
    }
  };

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (gameStarted) {
      const result: string = getWinner(state.you.play, state.pc.play);
      dispatch({ type: 'winner', payload: { message: result } });
    }

    return () => clearTimeout(timeoutId);
  }, [gameStarted]);

  return (
    <Container>
      <Wrapper>
        {!gameStarted ? (
          state.handTypes.map((handtype: HandType) => (
            <Button onClick={() => handleUserChoice(handtype)} key={handtype}>
              {handtype.toUpperCase()}
            </Button>
          ))
        ) : (
          <Button onClick={() => dispatch({ type: 'stop' })}>PLAY AGAIN</Button>
        )}
      </Wrapper>
      {!gameStarted ? (
        <Text>{state.screenMessage}</Text>
      ) : (
        <WrapperWinningText>
          <Text>You choose: {state.you.play.player}</Text>
          <Text>PC choose: {state.pc.play.player}</Text>
          <Text color='#7b00ffb9'>{state.winner.message}</Text>
        </WrapperWinningText>
      )}
    </Container>
  );
};

export default Main;
