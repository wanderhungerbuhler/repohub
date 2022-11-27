import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`

export const Logo = styled.img`
  width: 240px;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  max-width: 980px;
  width: 100%;

  display: grid;
  grid-template-columns: 300px 150px;
  grid-gap: 10px;
  justify-content: center;

  @media (max-width: 560px) {
    width: 90%;
    grid-template-columns: 1fr;
  }
`

export const Input = styled.input`
  font-size: 14px;
  background: #202024;
  color: #E1E1E6;
  padding: 16px 8px;
  border-radius: 4px;
  border: 1px solid #323238;
  outline: none;

  &:focus {
    border: 1px solid #009190;
  }
`
