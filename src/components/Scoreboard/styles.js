import styled from "styled-components";

export const ScoreBoard = styled.section`
  border: 3px solid blue;
  padding: 15px;
  width: 70vh;
  @media (max-width: 992px) {
    width: 50vw;
  }
`;

export const ScoreBoardDiv = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 3px solid blue;
`;

export const ScoreBoardTitle = styled.h1`
  text-align: center;
  margin-top: 10px;
`;
