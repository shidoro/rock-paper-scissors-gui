import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as gameLogic from '@shidoro/rock-paper-scissors-cli/bin/game/gameLogic';
import '@testing-library/jest-dom';

import App from '../App';

import rock from '../images/rock.png';
import paper from '../images/paper.png';
import scissors from '../images/scissors.png';
import { AppState } from '../context';
import { initialState } from '../context/App/types';

afterEach(cleanup);

describe('Testing images change after user interaction', () => {
  const Component: React.FC = (): JSX.Element => (
    <>
      <AppState>
        <App />
      </AppState>
    </>
  );

  test('It should display paper image for player', () => {
    render(<Component />);

    const rockBtn: HTMLElement = screen.getByText(
      new RegExp(initialState.handTypes[1], 'i')
    );
    userEvent.click(rockBtn);
    const imgs: HTMLElement[] = screen.getAllByRole('img');

    expect(imgs[0]).toHaveAttribute('src', paper);
  });

  test('It should display scissors image for player', () => {
    render(<Component />);

    const rockBtn: HTMLElement = screen.getByText(
      new RegExp(initialState.handTypes[2], 'i')
    );
    userEvent.click(rockBtn);
    const imgs: HTMLElement[] = screen.getAllByRole('img');

    expect(imgs[0]).toHaveAttribute('src', scissors);
  });

  test('It should display rock image for computer', () => {
    const spy = jest
      .spyOn(gameLogic, 'getRandomHandType')
      .mockImplementation(() => 'rock');
    render(<Component />);

    const rockBtn: HTMLElement = screen.getByText(
      new RegExp(initialState.handTypes[0], 'i')
    );
    userEvent.click(rockBtn);
    const imgs: HTMLElement[] = screen.getAllByRole('img');

    expect(imgs[1]).toHaveAttribute('src', rock);

    spy.mockRestore();
  });
});
