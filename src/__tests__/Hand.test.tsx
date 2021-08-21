import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Hand from '../components/Hand/Hand';

import rock from '../images/rock.png';
import paper from '../images/paper.png';

afterEach(cleanup);

describe('Testing the rock paper scissors images displaying correctly', () => {
  test('It should show an image with src displaying rock and no alt attribute', () => {
    render(<Hand src={rock} />);

    const img: HTMLElement = screen.getByRole('img');

    expect(img).toBeDefined();
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', rock);
    expect(img).not.toHaveAttribute('alt');
  });

  test('It should show an image with src displaying paper with alt attribute paper', () => {
    render(<Hand src={paper} alt={'paper'} />);

    const img: HTMLElement = screen.getByRole('img');

    expect(img).toBeDefined();
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', paper);
    expect(img).toHaveAttribute('alt', 'paper');
  });

  test('It should display two images, one of rock one of paper', () => {
    render(
      <>
        <Hand src={rock} />
        <Hand src={paper} alt='paper' />
      </>
    );

    const imgs: HTMLElement[] = screen.getAllByRole('img');
    const rockImg: HTMLElement = imgs[0];
    const paperImg: HTMLElement = imgs[1];

    expect(rockImg).toBeDefined();
    expect(paperImg).toBeDefined();

    expect(rockImg).toBeInTheDocument();
    expect(paperImg).toBeInTheDocument();

    expect(rockImg).toHaveAttribute('src', rock);
    expect(paperImg).toHaveAttribute('src', paper);

    expect(rockImg).not.toHaveAttribute('alt');
    expect(paperImg).toHaveAttribute('alt', 'paper');
  });
});
