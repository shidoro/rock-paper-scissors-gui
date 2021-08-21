import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 25vh;
  width: 100%;
  align-self: flex-start;
  margin-top: 2em;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: 'row';
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.button`
  border: 1px solid black;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #7b00ffb9;
    color: #ff7b00;
  }
`;

export const Text = styled.p`
  color: ${({ color }) => color || '#3f3f3fe2'};
  font-weight: bold;
  font-size: 1.3em;
  padding: 0.25em;
`;

export const WrapperWinningText = styled.div`
  display: flex;
  height: 25vh;
  flex-direction: column;
  justify-content: flex-end;
`;
