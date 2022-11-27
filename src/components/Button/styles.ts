import styled from 'styled-components';

export const Buttons = styled.button`
  border-radius: 4px;
  border: none;
  font-weight: bold;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  background: #00b5b4;
  color: #121212;
  transition: all .2s ease-in-out;

  &:hover {
    background: #009190;
  }

  &:disabled {
    background: #E1E1E6;
    cursor: no-drop;
  }

  @media (max-width: 560px) {
    height: 56px;
  }
`
