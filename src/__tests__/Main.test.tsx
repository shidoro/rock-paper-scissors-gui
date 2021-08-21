import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import * as gameLogic from '@shidoro/rock-paper-scissors-cli/bin/game/gameLogic';

import Main from '../components//Main/Main';
import { AppState } from '../context';
import { initialState } from '../context/App/types';

afterEach(cleanup);

describe('Testing Main component is displaying buttons and text', () => {
  const Component: React.FC = (): JSX.Element => (
    <>
      <AppState>
        <Main />
      </AppState>
    </>
  );

  test('It should render rock, paper, scissors buttons', () => {
    render(<Component />);

    const buttons: HTMLElement[] = screen.getAllByRole('button');

    expect(buttons).toBeDefined();
    expect(buttons).toHaveLength(3);

    buttons.forEach((btn, idx) => {
      expect(btn).toBeDefined();
      expect(btn).toBeInTheDocument();
      expect(btn).toHaveTextContent(
        new RegExp(initialState.handTypes[idx], 'i')
      );
      expect(btn).toBeEnabled();
    });
  });

  test('It should display state.screenMessage', () => {
    render(<Component />);

    const screenMessage = screen.getByText(
      new RegExp(initialState.screenMessage, 'i')
    );

    expect(screenMessage).toBeDefined();
    expect(screenMessage).toBeInTheDocument();
  });

  test('It should remove rock paper scissors buttons when either is clicked', () => {
    render(<Component />);

    const buttons: HTMLElement[] = screen.getAllByRole('button');
    userEvent.click(buttons[0]);

    buttons.forEach(btn => expect(btn).not.toBeInTheDocument());
  });

  test('It should display "play again" button when rock paper or scissors are clicked', () => {
    render(<Component />);

    const rockBtn: HTMLElement = screen.getByText(
      new RegExp(initialState.handTypes[0], 'i')
    );
    userEvent.click(rockBtn);
    const button: HTMLElement = screen.getByRole('button');

    expect(button).toBeDefined();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/play again/i);
  });

  test('It should remove screenMessage when rock paper or scissors are clicked', () => {
    render(<Component />);

    const screenMessage: HTMLElement = screen.getByText(
      new RegExp(initialState.screenMessage, 'i')
    );
    const rockBtn: HTMLElement = screen.getByText(
      new RegExp(initialState.handTypes[0], 'i')
    );
    userEvent.click(rockBtn);

    expect(screenMessage).not.toBeInTheDocument();
  });

  test('It should display "It\'s a tie"', () => {
    const spy = jest
      .spyOn(gameLogic, 'getRandomHandType')
      .mockImplementation(() => 'rock');
    render(<Component />);

    const rockBtn: HTMLElement = screen.getByText(
      new RegExp(initialState.handTypes[0], 'i')
    );
    userEvent.click(rockBtn);
    const tie = screen.getByText(/it's a tie/i);

    expect(tie).toBeDefined();

    spy.mockRestore();
  });

  test("It should display 'Are you a Jedi? How could you win against a computer?'", () => {
    const spy = jest
      .spyOn(gameLogic, 'getRandomHandType')
      .mockImplementation(() => 'scissors');
    render(<Component />);

    const rockBtn: HTMLElement = screen.getByText(
      new RegExp(initialState.handTypes[0], 'i')
    );
    userEvent.click(rockBtn);
    const jedi = screen.getByText(initialState.you.play.message);

    expect(jedi).toBeDefined();

    spy.mockRestore();
  });

  test("It should display 'I'm not a human, I'm smarter.'", () => {
    const spy = jest
      .spyOn(gameLogic, 'getRandomHandType')
      .mockImplementation(() => 'paper');
    render(<Component />);

    const rockBtn: HTMLElement = screen.getByText(
      new RegExp(initialState.handTypes[0], 'i')
    );
    userEvent.click(rockBtn);
    const pc = screen.getByText(initialState.pc.play.message);

    expect(pc).toBeDefined();

    spy.mockRestore();
  });
});
