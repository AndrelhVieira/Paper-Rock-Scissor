import styled from "styled-components";

export const Result = styled.section`
  border: 3px solid blue;
  padding: 15px;
  width: 70vh;
  border-top: none;
  border-bottom: none;
  @media (max-width: 992px) {
    width: 50vw;
  }
`;

export const ResultDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ResultPlayed = styled.h1`
  margin: 5px;
`;

export const ResultPlayer = styled.p`
  margin: 5px;
`;
