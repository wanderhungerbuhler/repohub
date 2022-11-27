import styled from 'styled-components';

export const ListRepo = styled.div`
  width: 560px;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  background: linear-gradient(90deg, #202024, #121212);

  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 560px) {
    width: 90%;
  }
`
export const Repos = styled.div`
  display: flex;

  padding: 20px;
  border-bottom: 1px solid #202024;

  a {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      width: 90%;

      strong { color: #E1E1E6; font-size: 18px; }
      p { color: #ccc; margin-top: 10px; font-size: 14px; }
    }
  }

`
