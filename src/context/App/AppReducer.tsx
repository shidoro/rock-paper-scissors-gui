import { State, Action } from './types';

export default function appReducer(state: State, action: Action) {
  switch (action.type) {
    case 'start':
      const {
        payload: { playerChoice, computerChoice }
      } = action;
      return {
        ...state,
        gameStarted: true,
        you: {
          img: { src: state.images[playerChoice], alt: playerChoice },
          play: { ...state.you.play, player: playerChoice }
        },
        pc: {
          img: {
            src: state.images[computerChoice.player],
            alt: computerChoice.player
          },
          play: { ...state.pc.play, player: computerChoice.player }
        },
        winner: { message: '' }
      };
    case 'winner':
      return {
        ...state,
        winner: action.payload
      };
    case 'stop':
      return {
        ...state,
        gameStarted: false,
        winner: { message: '' }
      };
    default:
      neverReached(action);
  }

  return state;
}

const neverReached = (never: never) => {};
