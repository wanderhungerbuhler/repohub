import styled from "styled-components";

export const Pagination = styled.div`
  width: 560px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  button {
    border: 0;
    border-radius: 7px;
    padding: 7px 10px;
    cursor: pointer;
    background: #202024;
    color: #E1E1E6;
  }

  @media (max-width: 560px) {
    width: 90%;
  }
`
