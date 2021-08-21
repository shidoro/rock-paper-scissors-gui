import {
  Player,
  HandType,
  HandTypes,
  WinningMessage
} from '@shidoro/rock-paper-scissors-cli/bin/types/types';
import rock from '../../images/rock.png';
import paper from '../../images/paper.png';
import scissors from '../../images/scissors.png';

export type Image = Readonly<{
  src: string;
  alt: string;
}>;

export type Challenger = {
  img: Image;
  play: Player;
};

export type State = Readonly<{
  you: Challenger;
  pc: Challenger;
  winner: WinningMessage;
  gameStarted: boolean;
  screenMessage: string;
  handTypes: HandTypes;
  images: {
    rock: string;
    paper: string;
    scissors: string;
  };
}>;

export type Action =
  | { type: 'stop' }
  | {
      type: 'start';
      payload: { playerChoice: HandType; computerChoice: Player };
    }
  | { type: 'winner'; payload: WinningMessage };

export type { Player, HandType, HandTypes };

export const initialState: State = {
  you: {
    img: {
      src: rock,
      alt: ''
    },
    play: {
      player: 'rock',
      message: 'Are you a Jedi? How could you win against a computer?'
    }
  },
  pc: {
    img: {
      src: rock,
      alt: ''
    },
    play: {
      player: 'rock',
      message: "I'm not a human, I'm smarter."
    }
  },
  winner: {
    message: ''
  },
  gameStarted: false,
  screenMessage: 'Do you feel lucky?',
  handTypes: ['rock', 'paper', 'scissors'],
  images: {
    rock,
    paper,
    scissors
  }
};
