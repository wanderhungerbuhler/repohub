import styled from 'styled-components';

export const Container = styled.div`
  max-width: 780px;
  width: 100%;
  height: 450px;
  margin: 15vh auto;

  a {
    color: #00b5b4;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 560px) {
    margin: 7vh auto;
  }
`

export const Bio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      list-style: none;
      padding: 0px 7px;

      display: flex;
      justify-content: center;
      align-items: center;
      color: #ccc;

      a { text-decoration: none;  }
    }
  }
`
export const BioName = styled.p`
  width: 30%;
  text-align: center;
  margin: 7px;
  font-size: 12px;
  color: #ccc;
`

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 15px;
`

export const Name = styled.strong`
  font-size: 28px;
  font-weight: bold;
  color: #E1E1E6;
`
export const Repo = styled.div`
  width: 560px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 560px) {
    width: 90%;
  }
`

export const RepoCount = styled.div`
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;

  padding: 10px 20px;
  background: #202024;

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  strong {
    font-size: 32px;
    color: #E1E1E6;
  }

  p {
    font-size: 15px;
    color: #E1E1E6;
  }
`

export const Repositories = styled.button`
  height: 76px;
  padding: 10px 20px;
  background: linear-gradient(90deg, #202024 20%, #121212);

  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;

  border: none;

  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;

  color: #E1E1E6;
  cursor: pointer;
`
