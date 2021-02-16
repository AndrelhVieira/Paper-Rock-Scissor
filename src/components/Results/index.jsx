import { Result, ResultDiv, ResultPlayer, ResultPlayed } from "./styles";

const Results = ({ movePlayer, moveMachine }) => {
  return (
    <Result className="cardResults">
      <ResultDiv>
        <ResultPlayer>Player</ResultPlayer>
        {movePlayer === "Rock" ? (
          <i style={{ fontSize: "45px" }} class="fas fa-hand-rock"></i>
        ) : movePlayer === "Paper" ? (
          <i style={{ fontSize: "45px" }} class="fas fa-hand-paper"></i>
        ) : movePlayer === "Scissors" ? (
          <i style={{ fontSize: "45px" }} class="fas fa-hand-scissors"></i>
        ) : null}
        {movePlayer !== 0 ? <ResultPlayed>{movePlayer}</ResultPlayed> : null}
      </ResultDiv>
      <ResultDiv>
        <ResultPlayer>Machine</ResultPlayer>
        {moveMachine === "Rock" ? (
          <i style={{ fontSize: "45px" }} class="fas fa-hand-rock"></i>
        ) : moveMachine === "Paper" ? (
          <i style={{ fontSize: "45px" }} class="fas fa-hand-paper"></i>
        ) : moveMachine === "Scissors" ? (
          <i style={{ fontSize: "45px" }} class="fas fa-hand-scissors"></i>
        ) : null}
        <ResultPlayed>{moveMachine}</ResultPlayed>
      </ResultDiv>
    </Result>
  );
};

export default Results;
